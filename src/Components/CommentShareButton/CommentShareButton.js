import React from 'react'

import commentImg from './images/comments.png'
import shareImg from './images/share.png'

const CommentShareButton = () =>{
    return(
        <div className="comment-share-button unselectable">
            <button className="comment"><img src={commentImg} alt=""/></button>
            <button className="share"><img src={shareImg} alt=""/></button>
        </div>
    )
}

export default CommentShareButton