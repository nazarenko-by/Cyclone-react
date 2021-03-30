import React from 'react'
import { useSelector } from 'react-redux'

import Topics from '../../Components/Topics/Topics'
import TopicListTagItem from '../../Components/Topics/TopicList/TopicListTagItem'

const DesignPage = () => {
    const topics = useSelector(state=>state.repository.topics)
    return(
        <div className="topics">
            <div className="big-title">Design</div>
            <Topics
                topicTag = {"Design"}
                TopicListItems = {TopicListTagItem}
                length = {topicListLength(topics.value)}
            />
        </div>
    )
}

const topicListLength = (topicList) => {
    let  count = 0;

    topicList.filter(topicList =>topicList.tag.filter(tag => tag === "Design").length ? count++:{})
    return count
}

export default DesignPage