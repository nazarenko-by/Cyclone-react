import React, { Component } from 'react'

class Tag extends Component {

    tags = (tagItem,index) => {
        return index === 0 ? tagItem : `, ${tagItem}`
    }
    
    render() {
        const{
            tag,
            className,
        } = this.props
        return(
            <div className={`tag ${className}`}>
                {tag.map((tagItem, index) => (
                   <a href="/" key={index}>{ this.tags(tagItem,index)}</a>
                ))}
            </div>
        )
    }
}

export default Tag