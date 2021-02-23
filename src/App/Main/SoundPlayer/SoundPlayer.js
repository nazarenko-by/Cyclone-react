import React, { Component } from 'react'

import './soundPlayer.css'
import arrowImg from '../../../images/arrow-article-slider.png'
import playImg from './images/Play_Button.png'
import pauseImg from './images/Pause_Button.png'

class SoundPlayer extends Component {
    state = {
        playSound:false,
        currentTime: 0,
        duration: 0,
        currentTimeFormat:'00:00',
    }

    componentDidMount() {
        this.audio.addEventListener("timeupdate", e => {
          this.setState({
            currentTime: e.target.currentTime,
            duration: e.target.duration,
            currentTimeFormat: this.getTime(Math.round(e.target.currentTime),  e.target.duration),
          });
        });
      }
    
      componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => {});
      }

    audio = new Audio (this.props.audio[0])

    play = () => {
        this.audio.play();
        this.setState({
            playSound:true,
        })
    }

    pause = () => {
        this.audio.pause();
        this.setState({
            playSound:false,
        })
    }

    stop = () => {
        this.pause();
        this.audio.currentTime = 0.0;
    }

    getSoundPlayerSlider = () => {
        let width
        width = (Math.round(this.state.currentTime) * 100) / Math.round(this.state.duration) + '%'
        console.log(width)
        return (width)
    }

    getIndex = (index) => {
        return index >= 10 ? `${index +1}` : `0${index +1}`
    }

    getTime = (time, duration) => {
        if (!isNaN(time, duration)) {
           return Math.round(duration/60) >= 60 ? 
            [Math.floor(time / 60 / 60).toString().padStart(2, '0'),
            (Math.floor(time / 60) - (Math.floor(time / 60 / 60) * 60)).toString().padStart(2, '0'),
            (time % 60).toString().padStart(2, '0'),].join(':') : 
            [(Math.round(time / 60)).toString().padStart(2, '0'),
            (time % 60).toString().padStart(2, '0'),].join(':')

        }
    }
    
    render() {
        const {
        image,
        soundName,
        autor,
        index,
    } = this.props
    
        return (  
            <div className="sound-player"> 
                <div className="sound-player-img">
                    <button className="play-pause-sound"
                        onClick = {this.state.playSound? () => this.pause(): () => this.play()}
                        ><img src={this.state.playSound? pauseImg : playImg} alt=""/></button>
                    <img src={image} alt=""/>
                </div>
                <div className="sound-number">{this.getIndex(index)}</div>
                <div className="sound-name">{soundName}</div>
                <div className="sound-autor">{autor}</div>
                <div className="sound-time-left">{this.state.currentTimeFormat}</div>
                <div className="sound-player-time-slider"><div className="elapsed" style = {{width: this.getSoundPlayerSlider()}}></div></div>
                <button className="arrow-next-button"
                    onClick = {() => this.stop()}
                ><img src={arrowImg} alt="" id="nextSound"/></button>
                <button className="arrow-prev-button"
                    onClick = {() => this.stop()}
                ><img src={arrowImg} alt="" id="prevSound"/></button>
            </div>
        )
    }
}

export default SoundPlayer