import { memo } from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
        <h3>오늘 뭐할까? 🥰</h3>
        <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  )
}

export default memo(Header);