import React from 'react'

import './articleSliderItem.css'

const ArticleSliderItem = () => {
    return(
        <div class="article-slide">
            <img src="images/article-img-1.png" alt="" class="article-slide-img"/>
            <div class="article-slide-data">
                <div class="article-slide-number">02</div>
                <div class="tag italic">Art, Fashion</div>
            </div>
            <div class="comment-share-button">
                <button class="comment"><img src="images/comments.png" alt=""/></button>
                <button class="share"><img src="images/share.png" alt=""/></button>
            </div>
            <div class="title "><span class="title-line">DADA Manifesto Explaned</span></div>
            <div class="text">As in every human endeavor when two strong personalities meet, opinions may clash and an argument often ensues. The same applies to the art world. Dada Manifesto is not a singular writing; over the years several were made, including perhaps the best-known by Hugo Ball and Tristan Tzara.</div>      
            <a href="/" class="read-more">Read More</a>             
        </div>
    )
}

export default ArticleSliderItem