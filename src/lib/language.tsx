/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { content, type Lang } from "./content";

type Ctx = {
  lang: Lang;
  t: (typeof content)["fr"];
  rtl: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  useEffect(() => {
    const t = content[lang];
    document.documentElement.lang = t.htmlLang;
    document.documentElement.dir = t.dir;
  }, [lang]);

  const value = useMemo<Ctx>(() => ({ lang, t: content[lang], rtl: lang === "ar" }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
