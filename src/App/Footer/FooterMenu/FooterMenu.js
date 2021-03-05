import React from 'react'

import './footerMenu.css'

import Navigation from '../../../Components/Navigation/Navigation'
import Search from '../../../Components/Search/Search'
import FollowUs from '../../../Components/FollowUs/FollowUs'

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