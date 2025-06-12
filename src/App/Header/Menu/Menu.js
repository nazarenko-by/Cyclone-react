import React from 'react'

import './menu.css'

import Navigation from '../../../components/Navigation/Navigation'
import Search from '../../../components/Search/Search'
import FollowUs from '../../../components/FollowUs/FollowUs'


const Menu = () => {
    return(
        <div className="menu">
            <Navigation
            creatMobMenu = {true}/>
            <Search/>
            <FollowUs/>
        </div>
    )
}

export default Menu