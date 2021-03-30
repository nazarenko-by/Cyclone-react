import React, { Component } from 'react'
import { connect } from 'react-redux';

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
            category,
            topics
        } = this.props
        
               
        return (
            <TopicListItems 
            topics={topics.value}
            startList = {startList}
            endList = {endList}
            windowWidth = {this.state.windowWidth}
            topicTag = {topicTag}
            category = {category}
            />
            );
    }

              
            
    
}


const mapState = (state) => ({
    topics:state.repository.topics

})

export default connect(
    mapState) (TopicList)