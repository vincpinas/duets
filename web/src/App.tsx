import "./Scss/App.scss"
// Libs
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Cookies from 'cookies-js'
// Components
import Helmet from "./Components/Helmet/Helmet"
import Join from "./Pages/Join/Join"
import LanguageSelector from "./Components/LanguageSelector/LanguageSelector"
import AudioToggle from "./Components/Audio/AudioToggle"
// Context
import { LanguageProvider } from "./Components/Language/LanguageProvider"
// Data
import { languages } from "./Components/Language/languages"
import { AudioProvider } from "./Components/Audio/AudioProvider"



function App() {
  const [selectedLang, setSelectedLang] = useState(
    Cookies.get('lang') ? JSON.parse(Cookies.get('lang')) :
      languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase())) ? languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase()))
        : languages[0]
  );

  return (
    <AudioProvider>
      <LanguageProvider lang={selectedLang} setLang={setSelectedLang}>
        <div className="a-menu">
          <AudioToggle />
          <LanguageSelector />
        </div>
        <Helmet />
        <Routes>
          <Route path="/" element={<Join />} />
        </Routes>
      </LanguageProvider>
    </AudioProvider>
  )
}

export default App
