import React from 'react'
import Banner from '../components/Banner'
import MainCard from '../components/MainCard'
import MainService from '../components/MainService'

const Main = () => {
    return (
        <div className='MainWrapper'>
            <Banner/>
            <MainCard/>
            <MainService/>
        </div>
    )
}

export default Main