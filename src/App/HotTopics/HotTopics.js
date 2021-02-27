import React, { useState } from 'react'

import './hotTopics.css'
import loadMoreImg from "./load-more.png"
import topicList from './hotTopic'


import HotTopicList from './HotTopicList/HotTopicList'
import MoreTopicsPages from './MoreTopicsPages/MoreTopicsPages'

const HotTopics = () => {
    const topicsCount = 8
    const length = topicList.length
    const [startList, setStartList] = useState(0);
    const [endList, setEndList] = useState(topicsCount);
    const [currentPage, setCurrentPage] = useState(1);
    

    return (
        <div className="hot-topics">
            <div className="big-title">Hot <span className="text-line">Topics</span></div>
            <HotTopicList
                startList = {startList}
                endList = {endList}
            />
            <div className="load-more unselectable">
                <img src= {loadMoreImg} alt=""/>
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
        </div>)
}

function loadMore (length, topicsCount, endList, setEndList, setCurrentPage, currentPage){
    if (length > endList){
        setEndList(endList + topicsCount)
        setCurrentPage(currentPage + 1)
    }
}

export default HotTopics

