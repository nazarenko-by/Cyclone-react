import React from 'react'

import './menu.css'

import Navigation from './Navigation/Navigation'
import Search from './Search/Search'
import FollowUs from './FollowUs/FollowUs'


const Menu = () => {
    return(
        <div className="menu">
            <Navigation/>
            <Search/>
            <FollowUs/>
        </div>
    )
}

export default Menu