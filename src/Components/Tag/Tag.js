import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                    tagItem === "Design" ?
                   <Link to="/design" key={index}>{ this.tags(tagItem,index)}</Link> :
                    tagItem === "Art" ? 
                    <Link to="/art" key={index}>{ this.tags(tagItem,index)}</Link> :
                    tagItem === "LiveStyle" ? 
                    <Link to="/liveStyle" key={index}>{ this.tags(tagItem,index)}</Link> :
                    tagItem === "Travel" ? 
                    <Link to="/travel" key={index}>{ this.tags(tagItem,index)}</Link> :
                    <Link to="/fashion" key={index}>{ this.tags(tagItem,index)}</Link>
                ))}
            </div>
        )
    }
}

export default Tag