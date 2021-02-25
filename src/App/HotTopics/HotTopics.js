import React from 'react'

import './hotTopics.css'

import HotTopicList from './HotTopicList/HotTopicList'

const HotTopics = () => {
    return (
        <div className="hot-topics">
            <div className="big-title">Hot <span className="text-line">Topics</span></div>
            <HotTopicList/>
        </div>)
}

export default HotTopics