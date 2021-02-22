import React, { Component } from 'react'

import './soundPlayer.css'
import arrowImg from '../../../images/arrow-article-slider.png'
import playImg from './images/Play_Button.png'
import pauseImg from './images/Pause_Button.png'

class SoundPlayer extends Component {

    getIndex = (index) => {
        return index >= 10 ? `${index +1}` : `0${index +1}`
    }
    
    render() {
        const {
        image,
        audio,
        soundName,
        autor,
        index,
    } = this.props
    
        return (  
            <div className="sound-player"> 
                <div className="sound-player-img">
                    <button className="play-pause-sound"
                        
                        ><img src={playImg} alt=""/></button>
                    <img src={image} alt=""/>
                </div>
                <div className="sound-number">{this.getIndex(index)}</div>
                <div className="sound-name">{soundName}</div>
                <div className="sound-autor">{autor}</div>
                <div className="sound-time-left">2:25</div>
                <div className="sound-player-time-slider"><div className="elapsed"></div></div>
                <button className="arrow-next-button"><img src={arrowImg} alt="" id="nextSound"/></button>
                <button className="arrow-prev-button"><img src={arrowImg} alt="" id="prevSound"/></button>
            </div>
        )
    }
}

export default SoundPlayer