import React from 'react'

import './footerMenu.css'

import Navigation from '../../Header/Menu/Navigation/Navigation'
import Search from '../../Header/Menu/Search/Search'
import FollowUs from '../../Header/Menu/FollowUs/FollowUs'

const FooterMenu = () => {
    return(
        <div className="footer-menu">
            <a href="/"><img src="/images/Logo.png" alt=""/></a>
            <Navigation/>
            <Search/>
            <FollowUs/>
        </div>
        
    )
}

export default FooterMenu