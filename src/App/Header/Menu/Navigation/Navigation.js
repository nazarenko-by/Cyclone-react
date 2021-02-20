import React, { Component } from 'react'

import './navigation.css'

import MobileNavigation from './MobileNavigation/MobileNavigation'

class Navigation extends Component{
    state = {
        className:""
    }

    openMobileMenu = () => {
        console.log(this.state.className)
        this.setState((prevState) => {
            return prevState.className === "open" ? {className:""} : {className: "open"}
        })
    }

    render(){
        return (
            <>
                <ul className={`navigation ${this.state.className}`}>
                    <li><a href="/">Main</a></li>
                    <li><a href="/">Design</a></li>
                    <li><a href="/">LiveStyle</a></li>
                    <li><a href="/">Travel</a></li>
                    <li><a href="/">Art</a></li>
                    <li><a href="/">Fashion</a></li>
                    <li><a href="/">Contacts</a></li>
                </ul>
                <MobileNavigation
                className = {this.state.className}
                openMobileMenu = {this.openMobileMenu}/>
            </>
        )
    }
    
}

export default Navigation