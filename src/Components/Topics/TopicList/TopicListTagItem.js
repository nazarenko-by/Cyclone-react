import React from 'react'
import StackGrid from "react-stack-grid";

import topics from '../../../topics'

import TopicListItem from './TopicListItem/TopicListItem'

const TopicListAllItem = ({
    startList,
    endList,
    windowWidth,
    topicTag,
}) => {
    return (
        <StackGrid className="topics-list"
            columnWidth={windowWidth >= 1024 ? "33.333%" : windowWidth >= 768 ? "50%" : "100%"}
            gutterWidth = {30}
            gutterHeight = {30}
            monitorImagesLoaded = {true}
            >
            {topics.filter(hotTopic =>hotTopic.tag.filter(tag => tag === topicTag).length).slice(startList,endList).map(({id, image, tag, title, text, autor}) => (
                <TopicListItem 
                key = {id}
                id = {id}
                image = {image}
                tag = {tag}
                title = {title}
                text = {text}
                autor = {autor}
                />
            ))}
        </StackGrid>
    )
}

export default TopicListAllItem