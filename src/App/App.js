import React from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Slider from './Slider/Slider'
import ArticleSlider from './ArticleSlider/ArticleSlider'

const App = () => {
    return(
        <>
            <Header/>
            <Slider/>
            <ArticleSlider/>
        </>
    )
}

export default App