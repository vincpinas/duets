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
import { LanguageProvider, useLanguageContext } from "./Components/Language/LanguageProvider"
// Data
import { languages } from "./Components/Language/languages"
import { AudioProvider } from "./Components/Audio/AudioProvider"
import Alerts from "./Components/Alerts/Alerts"
import { alert } from "./@types/client"
import Connecting from "./Components/Connecting/Connecting"



function App() {
  const [connected, setConnected] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    Cookies.get('lang') ? JSON.parse(Cookies.get('lang')) :
      languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase())) ? languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase()))
        : languages[0]
  );
  const [alerts, setAlerts] = useState<alert[] | []>([]);

  return (
    <AudioProvider>
      <LanguageProvider lang={selectedLang} setLang={setSelectedLang} alerts={alerts} setAlerts={setAlerts}>
        <Menu />
        <Helmet />
        <Alerts alerts={alerts} />
        {connected ?
          <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/room/:room/:name" element={<Room />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          : <Connecting setConnected={setConnected} />}
      </LanguageProvider>
    </AudioProvider>
  )
}

export default App
