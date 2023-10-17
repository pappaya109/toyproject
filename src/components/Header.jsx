import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className='navContainer'>
                <div>
                    <ul>
                        <Link to="#"><li>회사소개</li></Link>
                        <Link to="#"><li>서비스</li></Link>
                        <Link to="#"><li>함께가치</li></Link>
                        <Link to="#"><li>뉴스룸</li></Link>
                        <Link to="#"><li>글꼴</li></Link>
                        <Link to="#"><li>음악</li></Link>
                    </ul>   
                </div>
            </div>
        </header>
    )
}

export default Header