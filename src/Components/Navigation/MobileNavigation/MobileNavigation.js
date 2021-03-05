import React, { Component } from 'react'

import './mobileNavigation.css'

class MobileNavigation extends Component {
    
    render(){
        const{
            className,
            openMobileMenu,
        } = this.props
        return (
            <div className={`nav-mobile-menu ${className}`} onClick={() => openMobileMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
    
}

export default MobileNavigation