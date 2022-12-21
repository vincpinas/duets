import "./Scss/App.scss"
// Libs
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Cookies from 'cookies-js'
// Components
import Helmet from "./Components/Helmet/Helmet"
import Menu from "./Components/Menu/Menu"
// Pages
import Join from "./Pages/Join/Join"
import Room from "./Pages/Room/Room"
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
        <Menu />
        <Helmet />
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/room/:room/:name" element={<Room />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LanguageProvider>
    </AudioProvider>
  )
}

export default App
