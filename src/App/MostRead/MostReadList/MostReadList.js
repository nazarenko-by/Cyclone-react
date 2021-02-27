import React from 'react'

import './mostReadList.css'
import article from './article'

import MostReadArticle from './MostReadArticle/MostReadArticle'

const MostReadList = () => {
    return(
        <div className="most-read-article">
            {article.map(({id, tag, title, autor}) => (
                 <MostReadArticle
                 key = {id}
                 tag = {tag}
                 title = {title}
                 autor = {autor}
                 />
            ))}
        </div>
    )
}

export default MostReadList