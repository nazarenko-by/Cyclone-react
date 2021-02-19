import eact from 'react'

import './articleSliderNext.css'

const ArticleSliderNext = () => {
    return(
        <div className="article-slider-next"> 
            <button className="arrow-next-button"><img src="images/arrow-article-slider.png" alt=""/></button>
            <div className="article-slider-tag">Design</div>
            <div className="article-slider-theme">Genesis Of a Polaroid Photo</div>
            <div className="article-slider-number">04</div>
        </div>
    )
}

export default ArticleSliderNext