import React from 'react'
import { useSelector } from 'react-redux'

import Topics from '../../Components/Topics/Topics'

const HotTopics = () => {
    const topics = useSelector(state=>state.repository.topics)
    return (
        <div className="topics">
            <div className="big-title">Hot <span className="text-line">Topics</span></div>
            <Topics
                length = {topicListLength(topics.value)}
                category = {1}
            />
        </div>
    )
            
}

const topicListLength = (topicList) => {
    let  count = 0;
    topicList.filter(topicList =>topicList.category === 1? count++:{})
    return count
}

export default HotTopics

