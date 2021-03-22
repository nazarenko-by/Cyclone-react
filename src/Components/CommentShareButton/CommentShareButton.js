import React, {useState} from 'react'
import ModalWidow from '../ModalWindow/ModalWindow'

import commentImg from './images/comments.png'
import shareImg from './images/share.png'
import likeImg from './images/like.png'
import { useDispatch, useSelector } from 'react-redux'

const CommentShareButton = ({id,modalPositiom}) =>{
    const [openCloseModal, setOpenCloseModal] = useState({visibility: "hidden", opacity:"0"})
    const str = ""+id
    const likeId = +str.match(/(?<=\w*-)\d*/)?+str.match(/(?<=\w*-)\d*/)[0]:0;
    const isLiked = useSelector(state=>state[likeId])
    const dispatch = useDispatch()
    
    return(
        <>
            <div className="comment-share-button unselectable">
                <button className="like"  onClick={()=>dispatch(isLiked?
                        {type:"DISLIKE", id:likeId}:
                        {type:"LIKE", id:likeId})
                    }>
                    <img src={likeImg} alt="" style={{filter:isLiked?"opacity(0.5) drop-shadow(0 0 0 red)" :"none"}}/>
                </button>

                <button className="share">
                    <img src={shareImg} alt=""/>
                </button>

                <button className="comment" onClick={
                    ()=>setOpenCloseModal({visibility: "visible", opacity:"1"})
                }>
                    <img src={commentImg} alt=""/>
                </button>
                
                
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