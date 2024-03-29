import { createContext, useContext, useEffect, useState } from "react";
import { LanguageProviderInitialState, LanguageProviderProps } from "../../@types/client";
import { uniqueId } from "../../utils";
import { translations, languages } from './languages'

const INITIAL_STATE: LanguageProviderInitialState = {
  dict: translations.english,
  lang: languages[0],
  setLang: () => { },
  createAlert: () => { },
  clearAlerts: () => { },
  blockAlerts: () => { },
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

  const [createdAlertTimeout, setCreatedAlertTimeout] = useState(false);
  const createAlert = (text: string, type?: string) => {
    if (!createdAlertTimeout) {
      setCreatedAlertTimeout(true);
      const id = uniqueId();
      setAlerts([...alerts, { id, text, type }]);

      setTimeout(() => {
        setCreatedAlertTimeout(false);
      }, 200)
    }
  }

  const clearAlerts = () => {
    setCreatedAlertTimeout(false);
    setAlerts([]);
  }

  const blockAlerts = () => {
    setCreatedAlertTimeout(true)
  }

  return (
    <LanguageContext.Provider
      value={{ dict: currentDictionary, lang: lang, setLang, createAlert, clearAlerts, blockAlerts }}
    >
      {children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  return context;
};