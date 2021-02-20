import React from 'react'

import './articleSliderNext.css'
import arrowImg from '../../../images/arrow-article-slider.png'
import Tag from "../../Tag/Tag"

const ArticleSliderNext = ({
    number,
    title,
    tag,
}) => {
    return(
        <div className="article-slider-next unselectable"> 
            <button className="arrow-next-button" id="article-slider-next"><img src={arrowImg} alt=""/></button>
            <Tag className="article-slider-tag"
                tag = {tag}
                />
            <div className="article-slider-theme">{title}</div>
            <div className="article-slider-number">{number}</div>
        </div>
    )
}

export default ArticleSliderNext