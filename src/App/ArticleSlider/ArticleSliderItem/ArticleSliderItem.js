import React from 'react'

import './articleSliderItem.css'

const ArticleSliderItem = ({
    tag,
    title,
    text,
    image,
}) => {
    return(
        <div className="article-slide">
            <img src={image} alt="" className="article-slide-img"/>
            <div className="article-slide-data">
                <div className="article-slide-number">02</div>
                <div className="tag italic">Art, Fashion</div>
            </div>
            <div className="comment-share-button">
                <button className="comment"><img src="images/comments.png" alt=""/></button>
                <button className="share"><img src="images/share.png" alt=""/></button>
            </div>
            <div className="title "><span className="title-line">{title}</span></div>
            <div className="text">{text}</div>      
            <a href="/" className="read-more">Read More</a>             
        </div>
    )
}

export default ArticleSliderItem