import React, { Component } from 'react'
import StackGrid from "react-stack-grid";

import './hotTopicList.css'
import hotTopic from '../hotTopic'

import HotTopicListItem from './HotTopicListItem/HotTopicListItem'


class HotTopicList extends Component {
    state = {
        windowWidth:window.innerWidth,
    }

    updateWidth ()  {
        this.setState({
            windowWidth:window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener('resize',() => this.updateWidth());
    }

    componentWillUnmount() {
        window.removeEventListener('resize',() => this.updateWidth());
    }

    render() {
        return (
            <StackGrid className="topics-list"
            columnWidth={this.state.windowWidth >= 1024 ? "33.333%" : this.state.windowWidth >= 768 ? "50%" : "100%"}
            gutterWidth = {30}
            gutterHeight = {30}
            monitorImagesLoaded = {true}
            >
                
                {hotTopic.map(({id, image, tag, title, text, autor}) => (
                    <HotTopicListItem 
                    key = {id}
                    image = {image}
                    tag = {tag}
                    title = {title}
                    text = {text}
                    autor = {autor}
                    />
                ))}
            </StackGrid>
        )
    }
}


export default HotTopicList