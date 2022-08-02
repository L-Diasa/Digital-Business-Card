import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ThemeSwitcher from "./components/ThemeSwitcher"

export default function App() {
    return (
        <div>
            <div className="card">
                <Header />
                <Main />
                <Footer />
            </div>
            <ThemeSwitcher />
        </div>
    )
}