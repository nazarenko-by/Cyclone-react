import React, { useState } from 'react'

import './hotTopics.css'
import loadMoreImg from "./load-more.png"


import HotTopicList from './HotTopicList/HotTopicList'
import MoreTopicsPages from './MoreTopicsPages/MoreTopicsPages'

const HotTopics = () => {
    const topicsCount = 4
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
            <div className="load-more">
                <img src= {loadMoreImg} alt=""/>
                <button 
                    onClick = {() => {setEndList(endList + 8); setCurrentPage(currentPage + 1)}}
                >Load More Topics</button>
            </div>
            <MoreTopicsPages
            topicsCount = {topicsCount}
            currentPage = {currentPage}
            startList = {startList}
            endList = {endList}
            setStartList = {setStartList}
            setEndList = {setEndList}/>
            <div className="line"></div>
        </div>)
}

export default HotTopics