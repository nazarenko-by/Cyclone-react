import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'


const Header = () => {
    return(
        <header className="header">
            <Logo/>
            <div className="line"></div>
            <Menu/>
            <div className="line"></div>
        </header>
    )
}

export default Header