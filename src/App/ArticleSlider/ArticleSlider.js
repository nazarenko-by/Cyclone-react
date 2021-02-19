import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper/core';

import './articleSlider.css'
import 'swiper/swiper-bundle.css';

import ArticleSliderPrev from './ArticleSliderPrev/ArticleSliderPrev'
import ArticleSliderNext from './ArticleSliderNext/ArticleSliderNext'
import SliderItem from '../Slider/SliderItem/SliderItem';

const ArticleSlider = () => {
    return (
        <div className="article-slider">
            <ArticleSliderPrev/>
            <ArticleSliderNext/>
            <Swiper className="article-slides">
                <SwiperSlide>
                    <SliderItem>
                        
                    </SliderItem>
                </SwiperSlide>
            </Swiper>
        </div>
        )   
}

export default ArticleSlider