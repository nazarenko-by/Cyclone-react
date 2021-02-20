import React from 'react'

import './articleSliderPrev.css'
import arrowImg from '../../../images/arrow-article-slider.png'

const ArticleSliderPrev = ({
    number,
    title,
    tag,
}) => {
    return(
    <div className="article-slider-prev unselectable">
        <div className="article-slider-number">{number}</div>
        <div className="article-slider-tag">Fashion</div>
        <div className="article-slider-theme">{title}</div>
        <button className="arrow-prev-button" id="article-slider-prev"><img src={arrowImg} alt=""/></button>
    </div>
    )
}

export default ArticleSliderPrev