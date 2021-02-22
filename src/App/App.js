import React from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Slider from './Slider/Slider'
import ArticleSlider from './ArticleSlider/ArticleSlider'
import Main from './Main/Main'

const App = () => {
    return(
        <>
            <Header/>
            <Slider/>
            <ArticleSlider/>
            <Main/>
        </>
    )
}

export default App