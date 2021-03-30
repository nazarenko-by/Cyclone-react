import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper/core';
import { connect } from 'react-redux';

import './articleSlider.css'
import 'swiper/swiper-bundle.css';

import ArticleSliderPrev from './ArticleSliderPrev/ArticleSliderPrev'
import ArticleSliderNext from './ArticleSliderNext/ArticleSliderNext'
import ArticleSliderItem from './ArticleSliderItem/ArticleSliderItem';



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
        articleData: this.props.topics.filter(topics => topics.category === 2 || topics.category === 0)
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

        nextTitle = this.state.articleData[+nextNumber - 1].title
        prevTitle = this.state.articleData[+prevNumber - 1].title
        nextTag = this.state.articleData[+nextNumber - 1].tag
        prevTag = this.state.articleData[+prevNumber - 1].tag

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
        const {
            setReadMoreTopicId,
            topics
        } = this.props
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
                    speed = {750}
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
                        this.state.articleData.map(({
                            id,
                            tag,
                            title,
                            text,
                            image,
                        },index) => (                            
                            <SwiperSlide key = {id}>
                                <ArticleSliderItem
                                    id = {id}
                                    tag = {tag}
                                    slideNumber = {this.slideNumber(index + 1)}
                                    title = {title}
                                    text = {text}
                                    image = {image}
                                    setReadMoreTopicId = {setReadMoreTopicId}/>
                            </SwiperSlide>
                            
                        ))
                    }                
                </Swiper>
            </div>
            )   
    }
}

const mapState = (state) => ({
    topics:state.repository.topics.value

})


export default connect(
    mapState) (ArticleSlider)