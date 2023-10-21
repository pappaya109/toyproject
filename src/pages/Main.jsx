import React from 'react'
import Banner from '../components/Banner'
import MainCard from '../components/MainCard'
import MainService from '../components/MainService'
import styles from './Main.module.css'
import Season from '../components/Season'
import News from '../components/News'
const Main = () => {
    return (
        <div className={styles.MainWrapper}>
            <Banner/>
            <MainCard/>
            <MainService/>
            <Season/>
            <News/>
        </div>
    )
}

export default Main