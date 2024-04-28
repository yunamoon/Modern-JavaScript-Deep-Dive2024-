import React from 'react'
import './Header.css';

const Header = ({title, right, left}) =>{
  return (
   <header className='Header'>
    {/* 뒤로가기 버튼 */}
    <div>{right}</div>
    {/* 제목 */}
    <h2 className='title'>{title}</h2>
    {/* 현재 시간 or 메뉴 */}
    <h2>{left}</h2>
   </header>
  )
}

export default Header