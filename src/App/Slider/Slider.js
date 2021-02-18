import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper/core';

import './slider.css'
import 'swiper/swiper-bundle.css';

import SliderItem from './SliderItem/SliderItem'
import events from './events'
import arrow from './images/Arrow.png'

SwiperCore.use([Navigation, Autoplay ]);

class Slider extends Component {
    state = {
        swiperIndex: "",
        nextSwiperIndex:"",
        prevSwiperIndex:"",
    };

    setSwiperIndex (newState, length)  {
        console.log(newState, length)
        let index,next,prev;
        if(newState >= 10){
            index = `${newState}`
        } else{
            index = `0${newState}`
        }
        if(newState === length){
            next = `01`;
            if(newState >= 10){
                prev = `${newState - 1}`;
            } else{
                prev = `0${newState - 1}`;
            }
        } else if(newState === 1){
            next = `02`
            if(length >= 10){
                prev = `${length}`;
            } else{
                prev = `0${length}`;
            }
        } else{
            if(newState >= 9){
                next = `${newState + 1}`
            } else{
                next = `0${newState + 1}`
            }
            if(newState >= 11){
                prev = `${newState - 1}`;
            } else{
                prev = `0${newState - 1}`;
            }
        }

        this.setState(() => ({
            swiperIndex:index,
            nextSwiperIndex:next,
            prevSwiperIndex:prev,
        }))
        
    }

    render(){
        return(
            <div className="slider">
                <div className="slider-item-number">{this.state.swiperIndex}</div>
                <Swiper className ="slider-list"
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.slider-next',
                        prevEl: '.slider-prev',
                    }}
                    autoplay={{
                        delay: 10000,
                    }}  
                    onSlideChange={(swiper) => {this.setSwiperIndex(swiper.realIndex + 1, swiper.slides.length - 2)}}                    
                    //onSlideChange={(swiper) => {console.log(swiper.slides.length - 2) }}                    
                >
                    {
                        events.map(({
                            id,
                            title,
                            event,
                            eventDate,
                        }) =>(
                             <SwiperSlide
                             key = {id}>
                                <SliderItem
                                 title = {title}
                                 event = {event}
                                 eventDate = {eventDate}
                                 />
                             </SwiperSlide>
                        ))
                    }
                </Swiper>
                
                <div className="slider-number-prev unselectable">{this.state.prevSwiperIndex}</div>
                <div className="slider-number-next unselectable">{this.state.nextSwiperIndex}</div>
                <div className="slider-prev unselectable">{this.state.prevSwiperIndex}</div>
                <div className="slider-next unselectable">{this.state.nextSwiperIndex}</div>
                <button className="event-read-more unselectable"><img src={arrow} alt=""/></button>    
            </div>
        )
    }

}

export default Slider