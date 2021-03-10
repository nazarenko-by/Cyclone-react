import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = ({id, className, text, setReadMoreTopicId}) => {
    return (
        <Link to = "/fullTopicPage" className = {className} onClick ={() => setReadMoreTopicId(id)}>{text}</Link>
    )
}

export default ReadMore