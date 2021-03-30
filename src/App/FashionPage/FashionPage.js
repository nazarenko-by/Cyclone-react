import React from 'react'

import Topics from '../../Components/Topics/Topics'
import TopicListTagItem from '../../Components/Topics/TopicList/TopicListTagItem'
import { useSelector } from 'react-redux'

const FashionPage = () => {
    const topics = useSelector(state=>state.repository.topics)
    return(
        <div className="topics">
            <div className="big-title">Fashion</div>
            <Topics
                topicTag = {"Fashion"}
                TopicListItems = {TopicListTagItem}
                length = {topicListLength(topics.value)}
            />
        </div>
    )
}

const topicListLength = (topicList) => {
    let  count = 0;

    topicList.filter(topicList =>topicList.tag.filter(tag => tag === "Fashion").length ? count++:{})
    return count
}

export default FashionPage