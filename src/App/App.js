import React, { useState } from 'react'

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
import FullTopic from './FullTopic/FullTopic'

const App = () => {

    const [readMoreTopicId, setReadMoreTopicId] =  useState(5);

    return(
        <>
            <Header/>
            <Route path = "/" exact component = {Slider}/>
            <Route path = "/" exact render = {() => (
                <ArticleSlider 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/" exact render = {() => (
                <Main 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/" exact render = {() => (
                <HotTopics 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/" exact component = {MostRead}/>
            <Route path = "/design" render = {() => (
                <DesignPage 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/liveStyle" render = {() => (
                <LiveStylePage 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/travel" render = {() => (
                <TravelPage 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/art"  render = {() => (
                <ArtPage 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/fashion" render = {() => (
                <FashionPage 
                    setReadMoreTopicId = {setReadMoreTopicId}
                />
            )}/>
            <Route path = "/fullTopic" render = {() => (
                <FullTopic 
                    id = {readMoreTopicId}
                />)
            }/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default App