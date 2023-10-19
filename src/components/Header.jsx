import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    // const [openBar, setOpenBar] = useState(false);
    const liRef = useRef([]);
    const [openMenu, setOpenMenu] = useState();
    // console.log(liRef.current[0].innerText)
    const hoverNavBar = (e) => {
    }

    return (
        <header>
            <nav className='navContainer'>
                <div className='logo'
                    style={{
                        backgroundImage: 'url(/logo.png)',
                        backgroundSize: 'contain'
                    }}>
                </div>
                <ul>
                    <Link to="#"><li ref={el => liRef.current[0] = el} onMouseEnter={() => hoverNavBar()}>회사소개</li></Link>
                    <Link to="#"><li ref={el => liRef.current[1] = el}>서비스</li></Link>
                    <Link to="#"><li ref={el => liRef.current[2] = el}>함께가치</li></Link>
                    <Link to="#"><li ref={el => liRef.current[3] = el}>뉴스룸</li></Link>
                </ul>
                <div className='emptyBox'>
                </div>
            </nav>
            {/* <nav className='navContainer'> */}
                {/* <ul> */}
                    {/* 회사소개 */}
                    {/* <Link to="#"><li>우아한 문화</li></Link> */}
                    {/* <Link to="#"><li>히스토리</li></Link> */}
                    {/* <Link to="#"><li>지속가능한 경영</li></Link> */}
                {/* </ul> */}
                {/* <ul> */}
                    {/* 서비스 */}
                    {/* <Link to="#"><li>배달/포장</li></Link> */}
                    {/* <Link to="#"><li>커머스</li></Link> */}
                    {/* <Link to="#"><li>사장님/라이더</li></Link> */}
                    {/* <Link to="#"><li>컬쳐</li></Link> */}
                {/* </ul> */}
                {/* <ul> */}
                    {/* 함께가치 */}
                    {/* <Link to="#"><li>배민그린</li></Link> */}
                    {/* <Link to="#"><li>배민아카데미</li></Link> */}
                    {/* <Link to="#"><li>파트너 성장</li></Link> */}
                    {/* <Link to="#"><li>이웃과 함께</li></Link> */}
                {/* </ul> */}
                {/* <ul> */}
                    {/* 뉴스룸 */}
                    {/* <Link to="#"><li>보도자료</li></Link> */}
                    {/* <Link to="#"><li>언론보도</li></Link> */}
                    {/* <Link to="#"><li>팩트 바로 알기</li></Link> */}
                {/* </ul>
            </nav> */}
        </header>
    )
}

export default Header