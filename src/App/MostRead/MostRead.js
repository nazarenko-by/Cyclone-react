import React from 'react'

import './mostRead.css'

import MostReadList from './MostReadList/MostReadList'

const MostRead = () => {
    return(
        <div className="most-read">
            <div className="big-title">Most <span className="text-line">Read Article</span></div>
            <MostReadList/>
        </div>
    )
}

export default MostRead