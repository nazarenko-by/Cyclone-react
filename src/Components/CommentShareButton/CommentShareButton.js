import React, {useState} from 'react'
import ModalWidow from '../ModalWindow/ModalWindow'

import commentImg from './images/comments.png'
import shareImg from './images/share.png'

const CommentShareButton = ({id}) =>{
    const [openCloseModal, setOpenCloseModal] = useState({visibility: "hidden", opacity:"0"})
    return(
        <>
            <div className="comment-share-button unselectable">
                <button className="comment" onClick={()=>setOpenCloseModal({visibility: "visible", opacity:"1"})}><img src={commentImg} alt=""/></button>
                <button className="share" onClick={()=>console.log(document.getElementById(id).offsetHeight)}><img src={shareImg} alt=""/></button>
            </div>
            <ModalWidow 
                id = {id} 
                openCloseModal = {openCloseModal}
                setOpenCloseModal={setOpenCloseModal}  
            />
        </>
    )
}

export default CommentShareButton