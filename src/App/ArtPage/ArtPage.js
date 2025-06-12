import React from 'react'

import Topics from '../../components/Topics/Topics'
import TopicListTagItem from '../../components/Topics/TopicList/TopicListTagItem'
import { useSelector } from 'react-redux'

const ArtPage = () => {
    const topics = useSelector(state=>state.repository.topics)
    return(
        <div className="topics">
            <div className="big-title">Art</div>
            <Topics
                topicTag = {"Art"}
                TopicListItems = {TopicListTagItem}
                length = {topicListLength(topics.value)}
            />
        </div>
    )
}

const topicListLength = (topicList) => {
    let  count = 0;

    topicList.filter(topicList =>topicList.tag.filter(tag => tag === "Art").length ? count++:{})
    return count
}

export default ArtPage