import React, { useState } from 'react'

import './topics.css'

import TopicList from './TopicList/TopicList'
import MoreTopicsPages from './MoreTopicsPages/MoreTopicsPages'

const Topics = ({topicTag,TopicListItems, length, category = 3, }) => {
    const topicsCount = 8
    const [startList, setStartList] = useState(0);
    const [endList, setEndList] = useState(topicsCount);
    const [currentPage, setCurrentPage] = useState(1);
    

    return (
        <>
            <TopicList
                startList = {startList}
                endList = {endList}
                topicTag = {topicTag}
                TopicListItems = {TopicListItems}
                category = {category}
            />
            <div className="load-more unselectable">
                <button 
                    onClick = {() => loadMore(length, topicsCount, endList, setEndList, setCurrentPage, currentPage)}
                >Load More Topics</button>
            </div>
            <MoreTopicsPages
            length = {length}
            topicsCount = {topicsCount}
            currentPage = {currentPage}
            startList = {startList}
            endList = {endList}
            setStartList = {setStartList}
            setEndList = {setEndList}
            setCurrentPage = {setCurrentPage}/>
            <div className="line"></div>
        </>)
}

function loadMore (length, topicsCount, endList, setEndList, setCurrentPage, currentPage){
    if (length > endList){
        setEndList(endList + topicsCount)
        setCurrentPage(currentPage + 1)
    }
}

export default Topics

