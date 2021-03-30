import React from 'react'
import { ReduxFetch } from "react-redux-fetch";

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Slider from './Slider/Slider'
import ArticleSlider from './ArticleSlider/ArticleSlider'
import Main from './Main/Main'
import HotTopics from './HotTopics/HotTopics'
import MostRead from './MostRead/MostRead'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'
import {Route} from 'react-router-dom'
import DesignPage from './DesignPage/DesignPage'
import LiveStylePage from './LiveStylePage/LiveStylePage'
import TravelPage from './TravelPage/TravelPage'
import ArtPage from './ArtPage/ArtPage'
import FashionPage from './FashionPage/FashionPage'
import FullTopicPage from './FullTopicPage/FullTopicPage'
import Contacts from './Contacts/Contacts'

const fetchConfig = [
    {
      resource:  'topics' ,
      method: 'get',
      request: {
        url: "https://run.mocky.io/v3/5659cd0a-4712-4bf4-898e-fe904a74aac5"
      }
    }
  ];

const App = () => {
    return(
        <>
            <Header/>
            <ReduxFetch config={fetchConfig} fetchOnMount>
              {({ topicsFetch }) => {
                if (topicsFetch.rejected) {
                  return <div>Oops... Could not fetch topics!</div>;
               }
    
                 if (topicsFetch.fulfilled) {
                     return(<>
                        <Route path = "/" exact component = {Slider}/>
                        <Route path = "/" exact component = {ArticleSlider}/>
                        <Route path = "/" exact component = {Main}/>
                        <Route path = "/" exact component = {HotTopics}/>
                        <Route path = "/" exact component = {MostRead}/>
                        <Route path = "/design" component = {DesignPage}/>
                        <Route path = "/liveStyle" component = {LiveStylePage}/>
                        <Route path = "/travel" component = {TravelPage}/>
                        <Route path = "/art"  component = {ArtPage}/>
                        <Route path = "/fashion" component = {FashionPage}/>
                        <Route path = "/fullTopic/:id" component = {FullTopicPage}/>
                        <Route path = "/contacts" component = {Contacts}/>
                    </> )
                    }

                    return <div className="app-load"><img className="load-more-img" src= "/images/load-more.png" alt=""/></div>;
                  }}
                </ReduxFetch>

            <Subscribe/>
            <Footer/>
        </>
    )
}

export default App