import React from "react"

import topicList from '../hotTopic'

import arrowImg from '../../../images/arrow-article-slider.png'

const MoreTopicsPages = ({
    topicsCount,
    currentPage,
    startList,
    endList,
    setStartList,
    setEndList,
}) => {
    return (
        <div className="more-topics-pages">
            <ul className="topics-pages">
                {addPageNumber(currentPage, topicsCount)}
            </ul>
            <button className="arrow-prev-button" 
                onClick = {() => {setStartList(startList - topicsCount); setEndList(endList - topicsCount)}}
            ><img src={arrowImg} alt=""/></button>
            <button className="arrow-next-button"
                onClick = {() => {setStartList(startList + topicsCount); setEndList(endList + topicsCount);}} 
            ><img src={arrowImg} alt=""/></button>
        </div>
    )
}

function addPageNumber (currentPage, topicsCount) {
    const topicsListLenght = topicList.length
    let pages =[]
    for (let index = 1; index <= topicsListLenght/topicsCount; index++) {
        pages.push(<li key = {index} className = {currentPage !== index? "": "title-line"}>{index>=10? index : `0${index}`}</li>)                
    }
    return pages
}

export default MoreTopicsPages