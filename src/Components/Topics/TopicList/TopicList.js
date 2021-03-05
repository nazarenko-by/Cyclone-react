import React, { Component } from 'react'

import './topicList.css'

import TopicListAllItem from './TopicListAllItem'


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
            TopicListItems = TopicListAllItem,
            topicTag,
        } = this.props
        return ( 
                <TopicListItems 
                startList = {startList}
                endList = {endList}
                windowWidth = {this.state.windowWidth}
                topicTag = {topicTag}
                />
        )
    }
}


export default TopicList