import React from 'react'
import styles from '../styles/NewsItem.module.css'
const NewsItem = () => {
    return (
        <div className={styles.NewsItemWrapper}>
            <div className={styles.imgSection}>
                <img src='https://woowahan-cdn.woowahan.com/new_resources/image/report/c6fc6aa7424a4184956c860193a77664.png'></img>
            </div>
            <div className={styles.detailSection}>
                <h5>우아한형제들, 소상공인 대상 '우아한 노무 해결사' 진행</h5>
                <p>"갑자기 잠적한 직원…급여는 어떻게?”</p>
                <p>2023.10.11</p>
            </div>
        </div>
    )
}

export default NewsItem