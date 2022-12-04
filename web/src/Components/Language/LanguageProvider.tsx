import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import { translations, language, languages } from './languages'

// Interfaces
interface LPProps {
  children: ReactNode;
  lang: language;
  setLang: Dispatch<any>;
};

interface InitialStateType {
  dict: any;
  lang: language;
  setLang: Dispatch<language>;
}

const INITIAL_STATE: InitialStateType = {
  dict: translations.english,
  lang: languages[0],
  setLang: () => { },
}

// Context initialization
export const LanguageContext = createContext(INITIAL_STATE);

export const LanguageProvider = ({ children, lang, setLang }: LPProps) => {
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
      value={{ dict: currentDictionary, lang: lang, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  return context;
};