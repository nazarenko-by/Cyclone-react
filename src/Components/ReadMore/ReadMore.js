import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = ({id, className, text}) => {
    return (
        <Link to = {`/fullTopic/${id}`} className = {className}  dangerouslySetInnerHTML={{__html:text}}></Link>
    )
}

export default ReadMore