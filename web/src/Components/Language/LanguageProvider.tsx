import { createContext, useContext, useEffect, useState } from "react";
import { translations, languages } from './languages'

const INITIAL_STATE: LanguageProviderInitialState = {
  dict: translations.english,
  lang: languages[0],
  setLang: () => { },
  alerts: [],
  setAlerts: () => { },
}

// Context initialization
export const LanguageContext = createContext(INITIAL_STATE);

export const LanguageProvider = ({ children, lang, setLang, alerts, setAlerts }: LanguageProviderProps) => {
  const getDictionary = () => {
    switch (lang.abbreviation) {
      case "EN":
        return translations.english;
      case "NL":
        return translations.dutch;
      case "ES":
        return translations.spanish;
      default:
        return {};
    }
  }
  const [currentDictionary, setCurrentDictionary] = useState(getDictionary())

  useEffect(() => {
    setCurrentDictionary(getDictionary())
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{ dict: currentDictionary, lang: lang, setLang, alerts, setAlerts }}
    >
      {alerts.map((alert) => {
        return (
          <span>{alert.text}</span>
        )
      })}
      {children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  return context;
};