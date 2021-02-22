import React, { Component } from 'react'

import './soundPlayer.css'

class SoundPlayer extends Component {
    render() {
        return (
            <div class="sound-player"> 
                <div class="sound-player-img">
                    <button class="play-pause-sound"><img src="images/Play_Button.png" alt=""/></button>
                    <img src="images/sound.png" alt=""/>
                </div>
                <div class="sound-number">03</div>
                <div class="sound-name">The Beautiful Temples Of Kyoto</div>
                <div class="sound-autor">Jenuary 12, 2020</div>
                <div class="sound-time-left">2:25</div>
                <div class="sound-player-time-slider"><div class="elapsed"></div></div>
                <button class="arrow-next-button"><img src="images/arrow-article-slider.png" alt=""/></button>
                <button class="arrow-prev-button"><img src="images/arrow-article-slider.png" alt=""/></button>
            </div>
        )
    }
}

export default SoundPlayer