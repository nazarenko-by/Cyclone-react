import React from 'react'
import PropTypes from 'prop-types';
import StringToReact from 'string-to-react'

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
            />
            <div className="text">{text.indexOf(`<div>`) === 0 ? StringToReact(text.match(/[(\w*|\-|+|<|>|/|"|=)\s|\s(,|:|;)]*[.|?|!]/)+"</div>"): text.match(/[(\w*|\-|+)\s|\s(,|:|;)]*[.|?|!]/)}</div>
            <div className="topic-autor">{autor}</div>
        </div>
    )
}

TopicListItem.propTypes = {
    image: PropTypes.string,
    tag: PropTypes.array,
    title:PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    autor: PropTypes.string,
}

TopicListItem.defaultProps = {
    image: "/images/default.png"
}

export default TopicListItem