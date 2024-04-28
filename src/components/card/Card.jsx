import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <div className='Card'>
        <div className='card_header'>
            <h4 className='card_emoji'></h4>
            <h4 className='card_title'>오늘의 할일</h4>
        </div>
        <div className='progess'>
            <div className='progress'>
                <h4 className='comment'>Progress</h4>
                <h4 className='check'>✓</h4>
            </div>

            <div className='done'>
                <h4 className='progress_emoji'>Done</h4>
                <h4 className='check'>ⵔ</h4>
            </div>
        </div>
    </div>
  )
}

export default Card