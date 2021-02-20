import React from 'react'

import './articleSliderPrev.css'
import arrowImg from '../../../images/arrow-article-slider.png'

const ArticleSliderPrev = () => {
    return(
    <div className="article-slider-prev unselectable">
        <div className="article-slider-number">01</div>
        <div className="article-slider-tag">Fashion</div>
        <div className="article-slider-theme">19 Artists at Galerie Mathgoth</div>
        <button className="arrow-prev-button" id="article-slider-prev"><img src={arrowImg} alt=""/></button>
    </div>
    )
}

export default ArticleSliderPrev