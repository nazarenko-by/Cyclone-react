import React from 'react'

import './contacts.css'

const Contacts = () => {
    return(
        <div className="contacts-page">
            <div className="big-title">Contacts</div>
            <div className="title">Contact info</div>
            <div className="text">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt accusantium vitae. Possimus pariatur rerum doloremque in quisquam soluta corrupti repellendus culpa beatae dolorum ipsam cum laboriosam, optio aperiam vel.</div>
                <div>tel: +123-456-789</div>
            </div>
            <div className="map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2925549425777!2d36.22989593494706!3d50.00587158103788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1150aa7c385%3A0x5043df85a35a946b!2z0KHRg9GF0L7QuSDRhNC-0L3RgtCw0L0!5e0!3m2!1sru!2sua!4v1615729542641!5m2!1sru!2sua" loading="auto"></iframe>
            </div>
            
        </div>
    )
}

export default Contacts