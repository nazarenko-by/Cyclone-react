import React from 'react'

import './mainArticle.css'

import CommentShareButton from "../../../Components/CommentShareButton/CommentShareButton"
import Tag from '../../../Components/Tag/Tag'

import ReadMore from '../../../Components/ReadMore/ReadMore'
import { useSelector } from 'react-redux';


const MainArticle = ({setReadMoreTopicId}) => {
    const topics = useSelector(state=>state.repository.topics)
    const mainTopic = topics.value.filter(topics => topics.category === 3)[0]
    let  elementId = "topic-"+mainTopic.id
    return (
        <div className="main-article" id={elementId}>
            <div className="paginator unselectable"><span>01</span> <span>05</span></div>
            <Tag className = "italic"
                tag = {mainTopic.tag}
            />
            <CommentShareButton id = {elementId}/>
            <div className="big-title" dangerouslySetInnerHTML={{__html:mainTopic.title}}></div>
            <div className="text" dangerouslySetInnerHTML={{__html:mainTopic.text}}></div>
            <ReadMore 
                id = {mainTopic.id}
                className = "read-more"
                text = "Read More"
                setReadMoreTopicId = {setReadMoreTopicId}
            />
        </div>
    );
}
   

export default MainArticle