import React from 'react'

import './mainArticle.css'

import CommentShareButton from "../../../Components/CommentShareButton/CommentShareButton"
import Tag from '../../../Components/Tag/Tag'

import topics from '../../../topics'
import ReadMore from '../../../Components/ReadMore/ReadMore'

const mainTopic = topics.filter(topics => topics.category === 3)

const MainArticle = () => {
    return(
        <div className="main-article">
            <div className="paginator unselectable"><span>01</span> <span>05</span></div>
            <Tag className = "italic"
                tag = {mainTopic[0].tag}
            />
            <CommentShareButton/>
            <div className="big-title">{mainTopic[0].title}</div>
            <div className="text">{mainTopic[0].text}</div>
            <ReadMore 
                className = "read-more"
                text = "Read More"
            />
        </div>
    )
}

export default MainArticle