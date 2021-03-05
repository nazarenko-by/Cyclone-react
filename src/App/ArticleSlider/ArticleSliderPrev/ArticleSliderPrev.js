import React from 'react'

import './articleSliderPrev.css'
import arrowImg from '../../../images/arrow-article-slider.png'
import Tag from "../../../Components/Tag/Tag"

const ArticleSliderPrev = ({
    number,
    title,
    tag,
}) => {
    return(
    <div className="article-slider-prev unselectable">
        <div className="article-slider-number">{number}</div>
        <Tag className="article-slider-tag"
                tag = {tag}
                />
        <div className="article-slider-theme">{title}</div>
        <button className="arrow-prev-button" id="article-slider-prev"><img src={arrowImg} alt=""/></button>
    </div>
    )
}

export default ArticleSliderPrev