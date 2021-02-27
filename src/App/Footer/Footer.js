import React from 'react'

import './footer.css'

import FooterMenu from './FooterMenu/FooterMenu'

const Footer = () => {
    return (
        <footer className="footer">            
            <FooterMenu/>
            <div className="line"></div>
            <div className="copyright">© 2017 CYCLONE WordPress Theme.  Made with love by Fugue  All rights reserved.</div>
        </footer>
    )
}

export default Footer