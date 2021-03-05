import React from 'react'

import Topics from '../../Components/Topics/Topics'
import TopicListTagItem from '../../Components/Topics/TopicList/TopicListTagItem'

const DesignPage = () => {
    return(
        <div className="topics">
            <div className="big-title">Design</div>
            <Topics
                topicTag = {"Design"}
                TopicListItems = {TopicListTagItem}

            />
        </div>
    )
}

export default DesignPage