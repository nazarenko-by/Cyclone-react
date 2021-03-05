import React from 'react'

import './header.css'

import LogoDate from './LogoDate/LogoDate'
import Menu from './Menu/Menu'


const Header = () => {
    return(
        <header className="header">
            <LogoDate/>
            <div className="line"></div>
            <Menu/>
            <div className="line"></div>
        </header>
    )
}

export default Header