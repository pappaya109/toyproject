import React from 'react'
import styles from '../styles/Season.module.css'
const Season = () => {
    return (
        <div className={styles.SeasonWrapper}>
            <div className={styles.textBox}>
                <h2>잘 먹겠습니다<br/>잘 버리겠습니다</h2>
                <div className={styles.imgWrapper}>
                    <img src="https://woowahan-cdn.woowahan.com/static/image/main/season_1_character_docgo.png?bc398432"/>
                </div>
                <p>지구에게 건네는 작지만 큰 인사<br/>배달의민족과 함꼐 지구에게 인사를 건네 볼까요?</p>
            </div>
        </div>
    )
}

export default Season