import React, {Component} from 'react'
import PropTypes from 'prop-types';

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
                    <div className="event-name"><span className="italic">Exhibition</span> <span className="yellow-text">'{event}'</span></div>
                    <div className="event-date">{eventDate}</div>
                </div>
            </>   
        )
    }
}

SliderItem.propTypes ={
    title: PropTypes.object.isRequired,
    event: PropTypes.string.isRequired,
    eventDate: PropTypes.string,
}

SliderItem.defaultProps = {
    eventDate: "Date Not Specified"
}

export default SliderItem