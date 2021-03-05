import React from 'react'
import PropTypes from 'prop-types';

import './hotTopicListItem.css'

import Tag from "../../../../Components/Tag/Tag"
import CommentShareButton from '../../../../Components/CommentShareButton/CommentShareButton'

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

HotTopicListItem.propTypes = {
    image: PropTypes.string,
    tag: PropTypes.array,
     title: PropTypes.object.isRequired,
     text: PropTypes.object.isRequired,
     autor: PropTypes.string,
}

HotTopicListItem.defaultProps = {
    image: "/images/default.png"
}

export default HotTopicListItem