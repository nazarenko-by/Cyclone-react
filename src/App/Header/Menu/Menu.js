import React from 'react'

import './menu.css'

import Navigation from '../../../Components/Navigation/Navigation'
import Search from '../../../Components/Search/Search'
import FollowUs from '../../../Components/FollowUs/FollowUs'


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