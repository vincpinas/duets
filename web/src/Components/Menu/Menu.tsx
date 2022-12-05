import "./Menu.scss"
// Menu Items
import AudioToggle from "../Audio/AudioToggle"
import LanguageSelector from "../LanguageSelector/LanguageSelector"

function Menu() {
    return (
        <div className="c-menu">
            <AudioToggle />
            <LanguageSelector />
        </div>
    )
}

export default Menu