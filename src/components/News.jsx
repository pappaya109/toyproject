import React from 'react'
import styles from '../styles/News.module.css'
import NewsItem from './NewsItem'
const News = () => {
    return (
        <div className={styles.newsWrapper}>
            <h2>빠르고 정확한 <br/> 우아한형제들의 새 소식</h2>
            <div className={styles.cardSection}>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <button>더 보기</button>
            </div>
        </div>
    )
}

export default News