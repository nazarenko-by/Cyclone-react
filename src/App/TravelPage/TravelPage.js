import React from 'react'

import Topics from '../../Components/Topics/Topics'
import TopicListTagItem from '../../Components/Topics/TopicList/TopicListTagItem'
import topicList from '../../topics'

const TravelPage = ({setReadMoreTopicId}) => {
    return(
        <div className="topics">
            <div className="big-title">Travel</div>
            <Topics
                topicTag = {"Travel"}
                TopicListItems = {TopicListTagItem}
                length = {topicListLength()}
                setReadMoreTopicId = {setReadMoreTopicId}
            />
        </div>
    )
}

const topicListLength = () => {
    let  count = 0;

    topicList.filter(topicList =>topicList.tag.filter(tag => tag === "Travel").length ? count++:{})
    return count
}

export default TravelPage