import React from 'react'

import Topics from '../../Components/Topics/Topics'

import topicList from '../../topics'

const HotTopics = ({setReadMoreTopicId}) => {
    
    return (
        <div className="topics">
            <div className="big-title">Hot <span className="text-line">Topics</span></div>
            <Topics
                length = {topicListLength()}
                category = {1}
                setReadMoreTopicId = {setReadMoreTopicId}
            />
        </div>
    )
            
}

const topicListLength = () => {
    let  count = 0;

    topicList.filter(topicList =>topicList.category === 1? count++:{})
    return count
}

export default HotTopics

