import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core'; 

import './main.css'

import sound from './sound'

import MainArticle from './MainArticle/MainArticle'
import SoundPlayer from './SoundPlayer/SoundPlayer'

SwiperCore.use([Navigation]);

const Main = () => {
    return (
        <main className="main">
            <MainArticle/>
            <img src="images/sound.png" alt="" class="full-sound-player-img"/>
            <SoundPlayer/>
        </main>
    )
}

export default Main