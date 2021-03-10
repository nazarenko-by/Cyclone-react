import React from 'react'

import Topics from '../../Components/Topics/Topics'

import topicList from '../../topics'

const HotTopics = () => {
    
    return (
        <div className="topics">
            <div className="big-title">Hot <span className="text-line">Topics</span></div>
            <Topics length = {topicList.length}/>
        </div>
    )
            
}

export default HotTopics

