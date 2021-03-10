import React from 'react'
import PropTypes from 'prop-types';

import './topicListItem.css'

import Tag from "../../../Tag/Tag"
import CommentShareButton from '../../../CommentShareButton/CommentShareButton'
import ReadMore from '../../../ReadMore/ReadMore';

const TopicListItem = ({
    id,
    image,
    tag,
    title,
    text,
    autor,
    setReadMoreTopicId
}) => {
    return (
        <div className="topic">
            <img src={image} alt="" className="topic-image"/>
            <Tag 
                tag = {tag}
            />
            <CommentShareButton/>
            <ReadMore 
                id = {id}
                className = "title"
                text = {title}
                setReadMoreTopicId = {setReadMoreTopicId}
            />
            <div className="text">{text}</div>
            <div className="topic-autor">{autor}</div>
        </div>
    )
}

TopicListItem.propTypes = {
    image: PropTypes.string,
    tag: PropTypes.array,
    title:PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    text: PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    autor: PropTypes.string,
}

TopicListItem.defaultProps = {
    image: "/images/default.png"
}

export default TopicListItem