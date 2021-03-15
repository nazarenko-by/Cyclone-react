import React from 'react'
import PropTypes from 'prop-types';

import './mostReadArticle.css'

import CommentShareButton from '../../../../Components/CommentShareButton/CommentShareButton'
import Tag from '../../../../Components/Tag/Tag'

const MostReadArticle = ({
    id,
    tag,
    title,
    autor,
}) => {
    let  elementId = "MostReadTopic-"+id
    return(
        <div className="article" id={elementId}>
            <CommentShareButton id = {elementId}/>
            <div className="article-data">
                <Tag
                tag = {tag}/>
                <div className="title">{title}</div>
                <div className="topic-autor">{autor}</div>
            </div>
        </div>
    )
}

MostReadArticle.propTypes = {
    tag: PropTypes.array,
    title: PropTypes.object.isRequired,
    autor: PropTypes.string,
}

export default MostReadArticle