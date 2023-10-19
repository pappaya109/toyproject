import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='bannerWrapper' >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={{Pagination}}
                className="mySwiper"
            >
                <SwiperSlide style={{backgroundImage: `url('/img_1.jpg')`}}>
                        <div className='contentBox'>
                            <h2>우아한 형제들이 알고 싶다</h2>
                            <p>뭐 새로운 소식<br></br>없나요</p>
                            <p>뉴스룸{'>'}</p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='contentBox'>
                            <h2>우아한 형제들이 알고 싶다</h2>
                            <p>만드는 사람이 수고로우면<br></br>쓰는 사람이 편하다</p>
                            <p>서비스{'>'}</p>
                        </div>
                <video 
                loop 
                muted 
                auto
                poster='https://woowahan-cdn.woowahan.com/new_resources/image/banner/a744b994004242869f0ad158cbc00988.jpg'
                >
                    <source src="https://woowahan-cdn.woowahan.com/new_resources/image/banner/e7cd396be2fb4c24838ea637b79c32dc.mp4" type="video/mp4" />
                </video>
                </SwiperSlide>
                <SwiperSlide style={{backgroundImage: `url('https://woowahan-cdn.woowahan.com/new_resources/image/banner/98cdc4fd43e446ddb2d4019679726e07.jpg')`}}>
                        <div className='contentBox'>
                            <h2>우아한 형제들이 알고 싶다</h2>
                            <p>콩 한쪽도<br></br> 나눠먹으랬으니까</p>
                            <p>함께가치{'>'}</p>
                        </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Banner