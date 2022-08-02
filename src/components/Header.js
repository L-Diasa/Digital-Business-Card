import React, {useContext} from "react"
import {ThemeContext} from "../ThemeContext"

export default function Header() {
    const {theme} = useContext(ThemeContext)
    return (
        <header className="header">
            <img src="https://i.ibb.co/WW4BtWk/902-A77-D5-747-C-4-F06-9656-E69765-D9-F42-C.jpg"/>
            <section className={`header--info ${theme}-theme`}>
                <p className={`name ${theme}-theme-name`}>Lika Diasamidze</p>
                <p className={`role ${theme}-theme-role`}>Frontend Developer</p>
                <button className="email-button" 
                        onClick={(e) => {
                            window.location.href = "mailto:likadiasa@gmail.com";
                            e.preventDefault();
                        }}
                >
                <img src="https://img.icons8.com/ios-glyphs/16/undefined/new-post.png"/>
                <span>Email</span></button>
            </section>
        </header>
    )
}