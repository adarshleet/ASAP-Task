import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import MainContent from './components/MainContent/MainContent'

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <MainContent/>
        </>
    )
}

export default App
