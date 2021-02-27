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

const App = () => {
    return(
        <>
            <Header/>
            <Slider/>
            <ArticleSlider/>
            <Main/>
            <HotTopics/>
            <MostRead/>
            <Subscribe/>
        </>
    )
}

export default App