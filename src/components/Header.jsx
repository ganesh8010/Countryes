import { useState, useContext } from "react"
import { ColorContext } from "../context/ThemeContext"


function Header({ theme }) {
    // const [isDark, setIsDark] = theme
    // if (isDark) {
    //     document.body.classList.add('dark')
    // }
    // else {
    //     document.body.classList.remove('dark')
    // }

    const { isDark, setIsDark } = useContext(ColorContext)


    return (
        <div>
            <header className={`header-container ${isDark ? "dark" : ""}`}>
                <div className='header-content'>
                    <h2 className='title'>
                        <a href="">Where in the world?</a>
                    </h2>
                    <p className="theme-changer" onClick={() => {
                        // setIsDark(!isDark)
                        setIsDark(!isDark)
                        localStorage.setItem('isDarkMode', !isDark)
                    }}><i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : "Dark"} Mode</p>
                </div>
            </header>
        </div>
    )
}
export default Header
