import React, {useContext} from "react"
import {ThemeContext} from "../ThemeContext"

export default function Footer() {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-theme-footer`}>
                <a 
                    id="githubIcon" 
                    href="https://github.com/L-Diasa"
                ></a>
                <a 
                    id="instagramIcon" 
                    href="https://www.instagram.com/lika.diasamidze/"
                ></a>
                <a 
                    id="linkedinIcon" 
                    href="https://www.linkedin.com/in/l-diasa/"
                ></a>
        </footer>
    )
}