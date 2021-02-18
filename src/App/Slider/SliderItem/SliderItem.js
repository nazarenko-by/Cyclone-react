import React, {Component} from 'react'

import './sliderItem.css'

class SliderItem extends Component {
    render(){
        const{
            title,
            event,
            eventDate,
        } = this.props
        return(
            <>
                <div className="big-title slider-item-titel">{title}</div>
                <div className="events">
                    <div className="event-name"><span className="italic">Exhibition</span> {event}</div>
                    <div className="event-date">{eventDate}</div>
                </div>
            </>   
        )
    }
}

export default SliderItem