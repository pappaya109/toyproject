import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [openBar, setOpenBar] = useState();
    const [openSubMenu, setOpenSubsMenu] = useState();

    const hoverNavBar = (e) => {
        setOpenSubsMenu(e.target.value)
        setOpenBar(true)
    }
    const leaveNavBar = () => {
        setOpenBar(false)
    }
    
    return (
        <header>
            <nav className='navContainer'>
                <div className='logo'
                    style={{
                        backgroundImage: 'url(/logo.png)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}>
                </div>
                <ul >
                    <Link to="#"><li value={1} onMouseOver={(e) => hoverNavBar(e)} >회사소개</li></Link>
                    <Link to="#"><li value={2} onMouseOver={(e) => hoverNavBar(e)}>서비스</li></Link>
                    <Link to="#"><li value={3} onMouseOver={(e) => hoverNavBar(e)}>함께가치</li></Link>
                    <Link to="#"><li value={4} onMouseOver={(e) => hoverNavBar(e)}>뉴스룸</li></Link>
                </ul>
                <div className='emptyBox'>
                </div>
            </nav>
            {
                openBar ?
                    <nav className='navContainer' onMouseLeave={() => leaveNavBar()}>
                        {/* 회사소개 */}
                        {
                            openSubMenu == 1 ? 
                                <ul>
                                    <Link to="#"><li>우아한 문화</li></Link>
                                    <Link to="#"><li>히스토리</li></Link>
                                    <Link to="#"><li>지속가능한 경영</li></Link>
                                </ul>
                                : null
                        } 
                        {/* 서비스 */}
                        {
                            openSubMenu == 2 ?
                                <ul>
                                    <Link to="#"><li>배달/포장</li></Link>
                                    <Link to="#"><li>커머스</li></Link>
                                    <Link to="#"><li>사장님/라이더</li></Link>
                                    <Link to="#"><li>컬쳐</li></Link>
                                </ul> :
                                null
                        }

                        {/* 함께가치 */}
                        {
                            openSubMenu == 3 ?
                                <ul>
                                    <Link to="#"><li>배민그린</li></Link>
                                    <Link to="#"><li>배민아카데미</li></Link>
                                    <Link to="#"><li>파트너 성장</li></Link>
                                    <Link to="#"><li>이웃과 함께</li></Link>
                                </ul> :
                                null
                        }


                        {/* 뉴스룸 */}
                        {
                            openSubMenu == 4 ?
                                <ul>
                                    <Link to="#"><li>보도자료</li></Link>
                                    <Link to="#"><li>언론보도</li></Link>
                                    <Link to="#"><li>팩트 바로 알기</li></Link>
                                </ul> :
                                null
                        }
                    </nav>
                    : null
            }
        </header>
    )
}

export default Header