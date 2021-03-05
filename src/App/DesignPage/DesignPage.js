import React from 'react'

import Topics from '../../Components/Topics/Topics'
import TopicListTagItem from '../../Components/Topics/TopicList/TopicListTagItem'
import topicList from '../../Components/Topics/hotTopic'

const DesignPage = () => {
    return(
        <div className="topics">
            <div className="big-title">Design</div>
            <Topics
                topicTag = {"Design"}
                TopicListItems = {TopicListTagItem}
                length = {topicListLength()}
            />
        </div>
    )
}

const topicListLength = () => {
    let  count = 0;

    topicList.filter(topicList =>topicList.tag.filter(tag => tag === "Design").length ? count++:{})
    return count
}

export default DesignPage