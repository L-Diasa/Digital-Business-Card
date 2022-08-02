import React, {useContext} from "react"
import {ThemeContext} from "../ThemeContext"

export default function ThemeSwitcher(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            id="theme-switcher"
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}
