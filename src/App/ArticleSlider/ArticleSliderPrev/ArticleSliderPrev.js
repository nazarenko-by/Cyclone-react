import React from 'react'

import './articleSliderPrev.css'

const ArticleSliderPrev = () => {
    return(
    <div className="article-slider-prev">
        <div className="article-slider-number">01</div>
        <div className="article-slider-tag">Fashion</div>
        <div className="article-slider-theme">19 Artists at Galerie Mathgoth</div>
        <button className="arrow-prev-button"><img src="images/arrow-article-slider.png" alt=""/></button>
    </div>
    )
}

export default ArticleSliderPrev