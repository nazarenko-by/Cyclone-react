import React, { Component } from 'react'
import StackGrid from "react-stack-grid";

import './topicList.css'
import hotTopic from '../hotTopic'

import TopicListItem from './TopicListItem/TopicListItem'


class TopicList extends Component {
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
        const {
            startList,
            endList,
        } = this.props
        return (
            <StackGrid className="topics-list"
            columnWidth={this.state.windowWidth >= 1024 ? "33.333%" : this.state.windowWidth >= 768 ? "50%" : "100%"}
            gutterWidth = {30}
            gutterHeight = {30}
            monitorImagesLoaded = {true}
            >
                
                {hotTopic.slice(startList,endList).map(({id, image, tag, title, text, autor}) => (
                    <TopicListItem 
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


export default TopicList