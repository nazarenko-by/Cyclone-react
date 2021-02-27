import React from 'react'
import PropTypes from 'prop-types';

import './articleSliderItem.css'

import Tag from "../../Tag/Tag"
import CommentShareButton from "../../CommentShareButton/CommentShareButton"

const ArticleSliderItem = ({
    slideNumber,
    tag,
    title,
    text,
    image,
}) => {
    return(
        <div className="article-slide">
            <img src={image} alt="" className="article-slide-img unselectable"/>
            <div className="article-slide-data">
                <div className="article-slide-number">{slideNumber}</div>
                <Tag className="italic"
                tag = {tag}
                />
            </div>
            <CommentShareButton/>
            <div className="title "><span className="title-line">{title}</span></div>
            <div className="text">{text}</div>      
            <a href="/" className="read-more">Read More</a>             
        </div>
    )
}

ArticleSliderItem.propTypes = {
    slideNumber: PropTypes.string,
    tag: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.string,  
}

ArticleSliderItem.defaultProps = {
    image: "/images/default.png"
}

export default ArticleSliderItem