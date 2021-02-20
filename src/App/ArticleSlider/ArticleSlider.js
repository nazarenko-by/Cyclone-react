import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper/core';

import './articleSlider.css'
import 'swiper/swiper-bundle.css';

import ArticleSliderPrev from './ArticleSliderPrev/ArticleSliderPrev'
import ArticleSliderNext from './ArticleSliderNext/ArticleSliderNext'
import ArticleSliderItem from './ArticleSliderItem/ArticleSliderItem';

import articleData from './articleData'

SwiperCore.use([Navigation, Autoplay ]);

class ArticleSlider extends Component {
    state = {
        windowWidth:window.innerWidth
    }

    updateWidth ()  {
        this.setState({
            windowWidth:window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener('resize',() => this.updateWidth());
    }

    componentWillUnmount() {
        window.removeEventListener('resize',() => this.updateWidth());
    }

    slidesPerViewCounter = () => {
        if (this.state.windowWidth >= 1024){
            return (2)
        } else {
            return (1)
        }
    }

    render() {
        return (
            <div className="article-slider">
                <ArticleSliderPrev/>
                <ArticleSliderNext/>
                <Swiper className="article-slides"
                    slidesPerView = {this.slidesPerViewCounter()}
                    loop={true}
                    navigation={{
                        nextEl: '#article-slider-next',
                        prevEl: '#article-slider-prev',
                    }}
                    // autoplay={{
                    //     delay: 10000,
                    // }}  
                >                
                    {
                        articleData.map(({
                            id,
                            title,
                            text,
                            image,
                        }) => (
                            <SwiperSlide key = {id}>
                                <ArticleSliderItem
                                    title = {title}
                                    text = {text}
                                    image = {image}/>
                            </SwiperSlide>
                        ))
                    }                
                </Swiper>
            </div>
            )   
    }
}

export default ArticleSlider