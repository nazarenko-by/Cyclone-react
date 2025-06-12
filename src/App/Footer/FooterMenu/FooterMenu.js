import React from 'react'

import './footerMenu.css'

import Navigation from '../../../components/Navigation/Navigation'
import Search from '../../../components/Search/Search'
import FollowUs from '../../../components/FollowUs/FollowUs'
import Logo from '../../../components/Logo/Logo'

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