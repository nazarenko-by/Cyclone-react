import React from 'react'

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

const App = () => {
    return(
        <>
            <Header/>
            <Route path = "/" exact component = {Slider}/>
            <Route path = "/" exact component = {ArticleSlider}/>
            <Route path = "/" exact component = {Main}/>
            <Route path = "/" exact component = {HotTopics}/>
            <Route path = "/" exact component = {MostRead}/>
            <Route path = "/design" component = {DesignPage}/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default App