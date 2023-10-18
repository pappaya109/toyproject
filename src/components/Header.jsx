import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
            <nav className='navContainer'>
                <div className='logo'
                    style={{
                        backgroundImage: 'url(/logo.png)',
                        backgroundSize: 'contain'
                    }}>
                </div>
                <ul>
                    <Link to="#"><li>회사소개</li></Link>
                    <Link to="#"><li>서비스</li></Link>
                    <Link to="#"><li>함께가치</li></Link>
                    <Link to="#"><li>뉴스룸</li></Link>
                </ul>
                <div className='emptyBox'>
                </div>
            </nav>
    )
}

export default Header