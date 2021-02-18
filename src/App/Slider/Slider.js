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
        swiperIndex: 0,
        nextSwiperIndex:0,
        prevSwiperIndex:0,
    };

    setSwiperIndex (newState)  {
        this.setState(() => ({
            swiperIndex:newState,
        }))
    }

    render(){
        return(
            <div className="slider">
                <div className="slider-item-number">{this.state.swiperIndex}</div>
                <Swiper className ="slider-list"
                    slidesPerView={1}
                    loop={true}
                    loopAdditionalSlides={0}
                    navigation={{
                        nextEl: '.slider-next',
                        prevEl: '.slider-prev',
                    }}
                    autoplay={{
                        delay: 10000,
                    }}  
                    onSlideChange={(swiper) => {this.setSwiperIndex(swiper.realIndex)}} 
                                    
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
                
                <div className="slider-number-prev unselectable">01</div>
                <div className="slider-number-next unselectable">03</div>
                <div className="slider-prev unselectable">01</div>
                <div className="slider-next unselectable">03</div>
                <button className="event-read-more unselectable"><img src={arrow} alt=""/></button>    
            </div>
        )
    }

}

export default Slider