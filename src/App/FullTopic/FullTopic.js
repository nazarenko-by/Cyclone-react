import React from 'react'
import CommentShareButton from '../../Components/CommentShareButton/CommentShareButton'
import Tag from '../../Components/Tag/Tag'

import topics from '../../topics'



const FullTopic = ({id}) => {
const fullTopic = topics.filter(topics => topics.id === id)[0]    
    return (
        <div className="full-topic-page">
            <div className="big-title">{fullTopic.title}</div>
            <Tag 
                tag = {fullTopic.tag}
            />
            <CommentShareButton />
            <div className="text">{fullTopic.text}</div>
            <img src={fullTopic.image} alt="" className="full-topic-image"/>
            <div className="autor">{fullTopic.autor}</div>
        </div>
    )
}

export default FullTopic