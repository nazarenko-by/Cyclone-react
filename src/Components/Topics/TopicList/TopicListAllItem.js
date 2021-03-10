import React from 'react'
import StackGrid from "react-stack-grid";

import topics from '../../../topics'

import TopicListItem from './TopicListItem/TopicListItem'

const TopicListAllItem = ({
    startList,
    endList,
    windowWidth
}) => {
    return (
        <StackGrid className="topics-list"
            columnWidth={windowWidth >= 1024 ? "33.333%" : windowWidth >= 768 ? "50%" : "100%"}
            gutterWidth = {30}
            gutterHeight = {30}
            monitorImagesLoaded = {true}
            >
            {topics.slice(startList,endList).map(({id, image, tag, title, text, autor}) => (
                <TopicListItem 
                key = {id}
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