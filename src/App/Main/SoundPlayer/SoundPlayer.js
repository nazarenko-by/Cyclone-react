import React, { Component } from 'react'

import './soundPlayer.css'
import arrowImg from '../../../images/arrow-article-slider.png'
import playImg from './images/Play_Button.png'
import pauseImg from './images/Pause_Button.png'

class SoundPlayer extends Component {
    state = {
        playSound:false,
        currentTime: 0,
        duration: 0.1,
        currentTimeFormat:'00:00',
        elapsedWidth:0,
        mouseMove: false,
    }

    UNSAFE_componentDidMount() {
        this.audio.addEventListener("timeupdate", e => {
          this.setState({
            currentTime: e.target.currentTime,
            duration: e.target.duration,
            currentTimeFormat: this.getTime(Math.round(e.target.currentTime),  e.target.duration),
          });
          this.getSoundPlayerSlider()
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
        this.setState({
            elapsedWidth: width,
        })
    }

    getIndex = (index) => {
        return index >= 10 ? `${index +1}` : `0${index +1}`
    }

    getTime = (time, duration = this.state.duration) => {
        if (!isNaN(time, duration)) {
           return Math.round(duration/60) >= 60 ? 
            [Math.floor(time / 60 / 60).toString().padStart(2, '0'),
            (Math.floor(time / 60) - (Math.floor(time / 60 / 60) * 60)).toString().padStart(2, '0'),
            (time % 60).toString().padStart(2, '0'),].join(':') : 
            [(Math.floor(time / 60)).toString().padStart(2, '0'),
            (time % 60).toString().padStart(2, '0'),].join(':')

        }
    }

  

    setNewCurentTime () {
        let element = this.refs.Elapsed
        let right = Math.round(element.getBoundingClientRect().right) 
        let left = Math.round(element.getBoundingClientRect().left) 
        this.setState({
            mouseMove:true
        })
        this.pause()   
        element.addEventListener('mousemove', (e) => {
            if (this.state.mouseMove){
                this.setState({
                    elapsedWidth: (e.pageX - left)/(right-left)*100 + '%',
                    currentTime: this.state.duration/100 * (e.pageX - left)/(right-left)*100,
                    currentTimeFormat: this.getTime(Math.round((this.state.duration/100) * (e.pageX - left)/(right-left)*100))
                })
            }
        })
        
    }

    setCurentTime () {
        this.setState({
            mouseMove:false
        })
        this.audio.currentTime = this.state.currentTime;
        this.play()
        
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
                <div className="sound-player-time-slider"
                onMouseDown = {() => this.setNewCurentTime()}
                onMouseUp = {() => this.setCurentTime()}
                ref = "Elapsed"
                ><div className="elapsed" style = {{width: this.state.elapsedWidth}}
                    
                ></div></div>
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