import React from 'react'

import './mainArticle.css'

import CommentShareButton from "../../CommentShareButton/CommentShareButton"
import Tag from '../../Tag/Tag'

const MainArticle = () => {
    return(
        <div className="main-article">
            <div className="paginator unselectable"><span>01</span> <span>05</span></div>
            <Tag className = "italic"
                tag = {["Fashion", "Art"]}
            />
            <CommentShareButton/>
            <div className="big-title">The fascination <span className="italic"><span className="yellow-text text-line">with Alchemy</span> in Art</span></div>
            <div className="text">Alchemy as a protoscientific and philosophical method influenced artists to create works that can be categorized as alchemy art. However, this tradition is not generally accepted in art historical classifications, and often <span className="italic text-line">alchemical elements</span> in art are subscribed under different, stylistically and historically guided categorizations. <br/><br/> However, being as it is, it cannot be denied that alchemy had a significant influence on art and artists over the centuries, and can be traced in works from ancient Egypt, European Middle ages through Renaissance and contemporary art, to traditions of Asia and Far East.</div>
            <a href="/" className="read-more">Read More</a>
        </div>
    )
}

export default MainArticle