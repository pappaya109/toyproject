import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectFade } from 'swiper/modules';
import styles from './MainCard.module.css'
const MainCard = () => {
    return (
        <section>
            <h2>우아한 형제들이 일하는 이야기</h2>
            <p>평범한 사람들이 모여 비범한 성과를 만들어내도록</p>
            <div style={{ width: '100%', height: '20em' }}>
                <Swiper 
                slidesPerView={9}
                spaceBetween={2}
                loop={true}
                autoplay = {{
                    delay: 500,
                    disableOnInteraction: false,
                    }}
                modules={[Autoplay, Pagination,EffectFade]}
                >
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ea260167a5f84a959c8344a6abfefd7b.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://woowahan-cdn.woowahan.com/new_resources/image/card/ba8db158f23b43d1a41a9ad9dedfd26f.jpg"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default MainCard