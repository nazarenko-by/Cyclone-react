import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = ({id, className, text}) => {
    return (
        <Link to = {`/fullTopicPage/${id}`} className = {className}>{text}</Link>
    )
}

export default ReadMore