import React, { Component } from 'react'

import './navigation.css'

import MobileNavigation from './MobileNavigation/MobileNavigation'
import { Link } from 'react-router-dom'

class Navigation extends Component{
    state = {
        className:""
    }

    openMobileMenu = () => {
        this.setState((prevState) => {
            return prevState.className === "open" ? {className:""} : {className: "open"}
        })
    }

    render(){
        const {
            creatMobMenu,
        } = this.props
        return (
            <>
                <ul className={`navigation ${this.state.className}`}>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/design">Design</Link></li>
                    <li><Link to="/liveStyle">LiveStyle</Link></li>
                    <li><Link to="/travel">Travel</Link></li>
                    <li><Link to="/art">Art</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
                {creatMobMenu? <MobileNavigation
                className = {this.state.className}
                openMobileMenu = {this.openMobileMenu}/> : <></>}
            </>
        )
    }
    
}

export default Navigation