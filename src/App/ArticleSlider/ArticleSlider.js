import React from 'react'

import './articleSlider.css'

import ArticleSliderPrev from './ArticleSliderPrev/ArticleSliderPrev'
import ArticleSliderNext from './ArticleSliderNext/ArticleSliderNext'

const ArticleSlider = () => {
    return (
        <div class="article-slider">
            <ArticleSliderPrev/>
            <ArticleSliderNext/>
        </div>
        )   
}

export default ArticleSlider