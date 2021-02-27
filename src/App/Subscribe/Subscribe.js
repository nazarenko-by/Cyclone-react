import React from 'react'

import './subscribe.css'

const Subscribe = () => {
    return(
        <div className="subscribe">
            <div className="big-title">Subscribe</div>
            <form action="">
                <input type="email" placeholder="Your e-mail"/>
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe