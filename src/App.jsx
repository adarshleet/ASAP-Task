import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import MainContent from './components/MainContent/MainContent'
import SuggestedCourses from './components/SuggestedCourses/SuggestedCourses'
import DownloadBanner from './components/DownloadBanner/DownloadBanner'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <MainContent/>
            <SuggestedCourses/>
            <DownloadBanner/>
            <Footer/>
        </>
    )
}

export default App
