import React from 'react'
import Banner from '../components/Banner'

const Main = () => {
    return (
        <div>
            <Banner/>
            <section>
                <h2>우아한 형제들이 일하는 이야기</h2>
                <p>평범한 사람들이 모여 비범한 성과를 만들어내도록</p>
                <div style={{backgroundColor: 'gray', width: '100%', height:'20em'}}></div>
                <h2>'문 앞으로 배달되는 일상의 행복'이라는<br></br>비전으로</h2>
                <p>우아한 형제들은 배달이 일상을 조금 더 행복하게 하도록 오늘도 달리고 있어요</p>
                <video>
                    <source src="https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4" type="video/mp4" />
                </video>
                <h2>오늘이 전설이 될 수 있도록</h2>
                <p>세계 진출, 배민로봇 개발, 인공지능을 연구하며<br/>우아한 형제들은 미래를 더 가깝게 만들고 있어요.</p>
            </section>
        </div>
    )
}

export default Main