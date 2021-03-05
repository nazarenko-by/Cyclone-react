import React from 'react'
import PropTypes from 'prop-types';

import './topicListItem.css'

import Tag from "../../../Tag/Tag"
import CommentShareButton from '../../../CommentShareButton/CommentShareButton'

const TopicListItem = ({
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

TopicListItem.propTypes = {
    image: PropTypes.string,
    tag: PropTypes.array,
     title: PropTypes.object.isRequired,
     text: PropTypes.object.isRequired,
     autor: PropTypes.string,
}

TopicListItem.defaultProps = {
    image: "/images/default.png"
}

export default TopicListItem