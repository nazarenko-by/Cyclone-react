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
        windowWidth:window.innerWidth,
        nextNumber:'',
        prevNumber:'',
        nextTitle:'',
        prevTitle:'',
        nextTag:[],
        prevTag:[],
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

    slideNumber = (index) => {
        if (index >= 10){
            return (`${index}`)
        } else {
            return (`0${index}`) 
        }
    }

    getNextPrevData = (realIndex, length) => {
        let nextNumber, prevNumber, nextTitle, prevTitle, nextTag, prevTag
        let slideCount = this.slidesPerViewCounter()
        length = slideCount === 2? length - 2 : length
        if(realIndex === length){
            nextNumber = `0${slideCount}`;
            prevNumber = realIndex >= 11? `${realIndex - 1}` : `0${realIndex - 1}`
        } else if(realIndex === 1){
            nextNumber = `0${realIndex + slideCount}`
            prevNumber = length >= 10 ?  `${length}` : `0${length}`
        } else{
            nextNumber = realIndex + slideCount > length ? '01' : realIndex >= 9? `${realIndex + slideCount}` : `0${realIndex + slideCount}`
            prevNumber = realIndex >= 11? `${realIndex - 1}` : `0${realIndex - 1}`;

        }

        nextTitle = articleData[+nextNumber - 1].title
        prevTitle = articleData[+prevNumber - 1].title
        nextTag = articleData[+nextNumber - 1].tag
        prevTag = articleData[+prevNumber - 1].tag

        this.setState({
            nextNumber:nextNumber,
            prevNumber:prevNumber,
            nextTitle:nextTitle,
            prevTitle:prevTitle,
            nextTag:nextTag,
            prevTag:prevTag,
        })
    }

    render() {
        return (
            <div className="article-slider">
                <ArticleSliderPrev
                number = {this.state.prevNumber}
                title = {this.state.prevTitle}
                tag = {this.state.prevTag}
                />
                <ArticleSliderNext
                number = {this.state.nextNumber}
                title = {this.state.nextTitle}
                tag = {this.state.nextTag}
                />
                <Swiper className="article-slides"
                    slidesPerView = {this.slidesPerViewCounter()}
                    loop={true}
                    simulateTouch = {false}
                    navigation={{
                        nextEl: '#article-slider-next',
                        prevEl: '#article-slider-prev',
                    }}
                    autoplay={{
                        delay: 10000,
                    }}  
                    onSlideChange={(swiper) => {this.getNextPrevData(swiper.realIndex + 1, swiper.slides.length - 2)}}
                >                
                    {
                        articleData.map(({
                            id,
                            tag,
                            title,
                            text,
                            image,
                        },index) => (                            
                            <SwiperSlide key = {id}>
                                <ArticleSliderItem
                                    tag = {tag}
                                    slideNumber = {this.slideNumber(index + 1)}
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