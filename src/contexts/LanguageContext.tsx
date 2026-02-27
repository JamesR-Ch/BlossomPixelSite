'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { translations, type Lang, type Translations } from '@/lib/translations'

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggle: () => void
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'bp-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('th')

  // Hydrate from localStorage (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (stored === 'th' || stored === 'en') setLangState(stored)
    } catch {
      // ignore — SSR or private browsing
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'th' ? 'en' : 'th')
  }, [lang, setLang])

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    toggle,
    setLang,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
