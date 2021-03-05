import React from 'react'

import './footerMenu.css'

import Navigation from '../../../Components/Navigation/Navigation'
import Search from '../../../Components/Search/Search'
import FollowUs from '../../../Components/FollowUs/FollowUs'
import Logo from '../../../Components/Logo/Logo'

const FooterMenu = () => {
    return(
        <div className="footer-menu">
            <Logo/>
            <Navigation/>
            <Search/>
            <FollowUs/>
        </div>
        
    )
}

export default FooterMenu