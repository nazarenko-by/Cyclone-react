import React from 'react'
import StringToReact from 'string-to-react'

import CommentShareButton from '../../Components/CommentShareButton/CommentShareButton'
import Tag from '../../Components/Tag/Tag'

import './fullTopicPage.css'

import topics from '../../topics'

const FullTopic = ({match}) => {
    const id = +match.params.id
    const fullTopic = topics.filter(topics => topics.id === id)[0]  
    let  elementId = "topic-"+id
    return (
        <>
        {window.scrollTo(0,0)}
        <div className="full-topic-page" id={elementId}>
            <div className="big-title" dangerouslySetInnerHTML={{__html:fullTopic.title}}></div>
            <Tag 
                tag = {fullTopic.tag}
            />
            <CommentShareButton id={elementId} modalPositiom="fixed"/>
            <div className="text">{fullTopic.text.indexOf(`<div>`) === 0 ? StringToReact(fullTopic.text): fullTopic.text}</div>
            <img src={fullTopic.image} alt="" className="full-topic-image"/>
            <div className="topic-autor">{fullTopic.autor}</div>
        </div>
            
        </>
    )
}

export default FullTopic