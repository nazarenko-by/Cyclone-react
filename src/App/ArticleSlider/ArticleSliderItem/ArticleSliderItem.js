import React from 'react'
import PropTypes from 'prop-types';

import './articleSliderItem.css'

import Tag from "../../../Components/Tag/Tag"
import CommentShareButton from "../../../Components/CommentShareButton/CommentShareButton"
import ReadMore from '../../../Components/ReadMore/ReadMore';

const ArticleSliderItem = ({
    id,
    slideNumber,
    tag,
    title,
    text,
    image,
    setReadMoreTopicId
}) => {
    let  elementId = "topic-"+id
    return(
        <div className="article-slide" id={elementId}>
            <img src={image} alt="" className="article-slide-img unselectable"/>
            <div className="article-slide-data">
                <div className="article-slide-number">{slideNumber}</div>
                <Tag className="italic"
                tag = {tag}
                />
            </div>
            <CommentShareButton id = {elementId}/>
            <div className="title "><span className="title-line">{title}</span></div>
            <div className="text">{text}</div>      
            <ReadMore 
                id = {id}
                className = "read-more"
                text = "Read More"
                setReadMoreTopicId = {setReadMoreTopicId}
            />           
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