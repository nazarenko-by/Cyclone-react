import React from "react"

import arrowImg from '../../../images/arrow-article-slider.png'

const MoreTopicsPages = ({
    length,
    topicsCount,
    currentPage,
    startList,
    endList,
    setStartList,
    setEndList,
    setCurrentPage,
}) => {
    return (
        <div className="more-topics-pages">
            <ul className="topics-pages unselectable">
                {addPageNumber(length, currentPage, topicsCount, setStartList, setEndList, setCurrentPage)}
            </ul>
            <button className="arrow-prev-button unselectable" 
                onClick = {() => prevPage(endList, startList, topicsCount, currentPage, setStartList, setEndList, setCurrentPage)}
            ><img src={arrowImg} alt=""/></button>
            <button className="arrow-next-button unselectable"
                onClick = {() => nextPage(length ,endList, topicsCount, currentPage, setStartList, setEndList, setCurrentPage)} 
            ><img src={arrowImg} alt=""/></button>
        </div>
    )
}

function addPageNumber (length, currentPage, topicsCount, setStartList, setEndList, setCurrentPage) {
    let pages =[]
    let separation
    for (let index = 1; index <= Math.ceil(length/topicsCount); index++) {
        if (index === 1 || (index >= (currentPage - 2) && index <= (currentPage + 2)) || index === Math.ceil(length/topicsCount)){
           pages.push(<li key = {index} className = {currentPage !== index? "": "title-line"}
        onClick = {() => 
            {setStartList(topicsCount*index-topicsCount);
             setEndList(topicsCount*index);
             setCurrentPage(index)}
        }>{index>=10? index : `0${index}`}</li>)  
        separation = true
        } else if (separation){
            pages.push(<li key = {index}>...</li>)
            separation = false
        }
                       
    }
    return pages
}

function nextPage(length ,endList, topicsCount, currentPage, setStartList, setEndList, setCurrentPage){
    if (length > endList){
        setStartList(endList);
        setEndList(endList + topicsCount);
        setCurrentPage(currentPage + 1) 
    }
}

function prevPage(endList, startList, topicsCount, currentPage, setStartList, setEndList, setCurrentPage){
    if (startList > 0){
        setStartList(endList - topicsCount*2);
        setEndList(endList - topicsCount);
        setCurrentPage(currentPage - 1) 
    }
}

export default MoreTopicsPages