import React from 'react'
import { Link } from 'react-router-dom'

import image from './Logo.png'

const Logo = () => {
    return (
        <Link to = "/"><img src={image} alt=""/></Link>
    )
}

export default Logo