import React, {useContext} from "react"
import {ThemeContext} from "../ThemeContext"

export default function Main() {
    const {theme} = useContext(ThemeContext)
    return (
        <main className={`main--info ${theme}-theme`}>
            <section>
                <p className="section-title">About</p>
                <p className="section-content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section>
                <p className="section-title">Interests</p>
                <p className="section-content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </main>
    )
}