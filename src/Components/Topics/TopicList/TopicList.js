import React, { Component } from 'react'
import { ReduxFetch } from "react-redux-fetch";
import loadMoreImg from "../load-more.png"

import './topicList.css'

import TopicListAllItem from './TopicListAllItem'

const fetchConfig = [
    {
      resource:  'topics' ,
      method: 'get',
      request: {
        url: "https://run.mocky.io/v3/5659cd0a-4712-4bf4-898e-fe904a74aac5"
      }
    }
  ];


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
        } = this.props
        return ( <>
            <ReduxFetch config={fetchConfig} fetchOnMount>
        {({ topicsFetch }) => {
          if (topicsFetch.rejected) {
              console.log(topicsFetch)
            return <div>Oops... Could not fetch topics!</div>;
          }
    
          if (topicsFetch.fulfilled) {
            return (
                <TopicListItems 
                topics={topicsFetch.value}
                startList = {startList}
                endList = {endList}
                windowWidth = {this.state.windowWidth}
                topicTag = {topicTag}
                category = {category}
                />
                );
      }

      return <div><img src= {loadMoreImg} alt=""/></div>;
    }}
  </ReduxFetch>
        
        </>
        )
    }
}


export default TopicList