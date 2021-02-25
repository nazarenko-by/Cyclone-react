import React from 'react'

import './hotTopicListItem.css'

import Tag from "../../../Tag/Tag"
import CommentShareButton from '../../../CommentShareButton/CommentShareButton'

const HotTopicListItem = ({
    image,
    tag,
    title,
    text,
    autor,
}) => {
    return (
        <div className="topic">
            <img src={image} alt="" className="topic-image"/>
            <Tag 
                tag = {tag}
            />
            <CommentShareButton/>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="topic-autor">{autor}</div>
        </div>
    )
}

export default HotTopicListItem