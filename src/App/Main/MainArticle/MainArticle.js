import React from 'react'

import './mainArticle.css'

import CommentShareButton from "../../../Components/CommentShareButton/CommentShareButton"
import Tag from '../../../Components/Tag/Tag'

import topics from '../../../topics'
import ReadMore from '../../../Components/ReadMore/ReadMore'

const mainTopic = topics.filter(topics => topics.category === 3)[0]

const MainArticle = ({setReadMoreTopicId}) => {
    let  elementId = "topic-"+mainTopic.id
    return(
        <div className="main-article" id={elementId}>
            <div className="paginator unselectable"><span>01</span> <span>05</span></div>
            <Tag className = "italic"
                tag = {mainTopic.tag}
            />
            <CommentShareButton id = {elementId}/>
            <div className="big-title">{mainTopic.title}</div>
            <div className="text">{mainTopic.text}</div>
            <ReadMore 
                id = {mainTopic.id}
                className = "read-more"
                text = "Read More"
                setReadMoreTopicId = {setReadMoreTopicId}
            />
        </div>
    )
}

export default MainArticle