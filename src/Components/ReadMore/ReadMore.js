import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = ({className, text}) => {
    return (
        <Link to = "/fullTopic" className = {className}>{text}</Link>
    )
}

export default ReadMore