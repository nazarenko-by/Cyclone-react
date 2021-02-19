import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper/core';

import './articleSlider.css'
import 'swiper/swiper-bundle.css';

import ArticleSliderPrev from './ArticleSliderPrev/ArticleSliderPrev'
import ArticleSliderNext from './ArticleSliderNext/ArticleSliderNext'
import ArticleSliderItem from './ArticleSliderItem/ArticleSliderItem';

import articleData from './articleData'

const ArticleSlider = () => {
    return (
        <div className="article-slider">
            <ArticleSliderPrev/>
            <ArticleSliderNext/>
            <Swiper className="article-slides">
                
                    {
                        articleData.map(({
                            id,
                            title,
                            text,
                        }) => (
                            <SwiperSlide key = {id}>
                                <ArticleSliderItem
                                    title = {title}
                                    text = {text}/>
                            </SwiperSlide>
                        ))
                    }                
            </Swiper>
        </div>
        )   
}

export default ArticleSlider