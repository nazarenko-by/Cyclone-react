import React, { useState } from 'react'

import reviews from './reviews'

import './modalWindow.css'

const ModalWidow = ({id}) => {
    const [comments, setComments] = useState(getReviews(id))
    const [newСomments, setNewСomments] = useState({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => {
        setNewСomments((value)=>({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewСomments((value)=>({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault()
        setComments(value=>{
            return[...value, newСomments]
        })
        setNewСomments({
            name:"",
            text:""
        })

    }


    return (
        <div className="modal-window"
            // style={{visibility: "hidden", opacity:"0"}}
        >
            <div className="comment-area">
                <div className="close-modal">x</div>
                <div className="comments">
                    {comments.map(({name, text}, index) => (
                        <div key={index} className="comment">{name}: {text}</div>
                    ))}
                </div>
                <form onSubmit={sendForm}>
                    <input
                        type="text" 
                        placeholder="Your name" 
                        value={newСomments.name} 
                        onChange={handleNameChange}
                    />
                    <textarea 
                        cols="30" 
                        rows="10"
                        value={newСomments.text}
                        onChange={handleTextChange}
                        placeholder="Your comment"
                        ></textarea>
                    <button>Leave a comment</button>
                </form>
            </div>
        </div>
    )
}

const getReviews = (id) => {
    let comments = reviews.filter(reviews => reviews.id === id)[0] || {review:[]}
    return comments.review
}

export default ModalWidow