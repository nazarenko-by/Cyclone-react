import React from 'react'

import './followUs.css'
import facebook_icon from "./images/Facebook.png"
import twiter_icon from "./images/Twiter.png"
import instagram_icon from "./images/Instagram.png"
import pinterest_icon from "./images/Pinterest.png"

const FollowUs = () => {
    return (
        <div className="follow-us unselectable">
            <div>Follow us</div>
            <button><img src={facebook_icon} alt=""/></button>
            <button><img src={twiter_icon} alt=""/></button>
            <button><img src={instagram_icon} alt=""/></button>
            <button><img src={pinterest_icon} alt=""/></button>
        </div> 
    )
}

export default FollowUs