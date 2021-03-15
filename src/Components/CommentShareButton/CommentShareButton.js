import React from 'react'
import ModalWidow from '../ModalWindow/ModalWindow'

import commentImg from './images/comments.png'
import shareImg from './images/share.png'

const CommentShareButton = ({id}) =>{
    return(
        <>
            <div className="comment-share-button unselectable">
                <button className="comment"><img src={commentImg} alt=""/></button>
                <button className="share"><img src={shareImg} alt=""/></button>
            </div>
            <ModalWidow id = {id}/>
        </>
    )
}

export default CommentShareButton