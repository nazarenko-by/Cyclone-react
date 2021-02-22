import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core'; 

import './main.css'

import sound from './sound'

import MainArticle from './MainArticle/MainArticle'
import SoundPlayer from './SoundPlayer/SoundPlayer'

SwiperCore.use([Navigation]);

class Main extends Component {
    state = {
        fullImage:sound[0].image,
    }

    
    getFullImage = (index) => {
        this.setState({
            fullImage:sound[index].image,
        })
    }

    render(){
        return (
            <main className="main">
                <MainArticle/>
                <img src={this.state.fullImage} alt="" className="full-sound-player-img"/>
                <Swiper className="sound-slider"
                    loop={true}
                    simulateTouch = {false}
                    speed = {750}
                    navigation={{
                        nextEl: '#nextSound',
                        prevEl: '#prevSound',
                    }}
                    onSlideChange={(swiper) => {this.getFullImage(swiper.realIndex)}}
                    >
                        {
                            sound.map(({
                                id,
                                image,
                                audio,
                                soundName,
                                autor,
                            }, index) => (
                                <SwiperSlide key = {id}>
                                    <SoundPlayer
                                    image = {image}
                                    audio = {audio}
                                    soundName = {soundName}
                                    autor = {autor}
                                    index = {index}
                                    />
                                </SwiperSlide>
                                
                            ))
                        }
                     </Swiper>
            </main>
        )
    }
}

export default Main