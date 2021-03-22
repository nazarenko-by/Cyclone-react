import React, {useState} from 'react'
import ModalWidow from '../ModalWindow/ModalWindow'

import commentImg from './images/comments.png'
import shareImg from './images/share.png'
import likeImg from './images/like.png'

const CommentShareButton = ({id,modalPositiom}) =>{
    const [openCloseModal, setOpenCloseModal] = useState({visibility: "hidden", opacity:"0"})
    return(
        <>
            <div className="comment-share-button unselectable">
                <button className="like"><img src={likeImg} alt=""/></button>
                <button className="share"><img src={shareImg} alt=""/></button>
                <button className="comment" onClick={()=>setOpenCloseModal({visibility: "visible", opacity:"1"})}><img src={commentImg} alt=""/></button>
                
                
            </div>
            <ModalWidow 
                id = {id} 
                openCloseModal = {openCloseModal}
                setOpenCloseModal={setOpenCloseModal}  
                modalPositiom={modalPositiom}
            />
        </>
    )
}

export default CommentShareButton