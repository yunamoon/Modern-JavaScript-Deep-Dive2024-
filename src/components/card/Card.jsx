import React from 'react'
import './Card.css';

const Card = ({emoji,task, description,  progress, done, onClick}) => {
  return (
    <div className='Card'
    onClick={onClick}>
        <div className='card_header'>
            <h4 className='card_emoji'>{emoji}</h4>
            <h4 className='card_title'>{task}</h4>
        </div>
        <p className='description'>{description}</p>
        <div className='current'>
            <div className='progress'>
                <h4 className='comment'>Progress</h4>
                <h4 className='check'>{progress? 'ⵔ' : '☓'}</h4>
            </div>

            <div className='done'>
                <h4 className='progress_emoji'>Done</h4>
                <h4 className='check'>{done? 'ⵔ' : '☓' }</h4>
            </div>
        </div>
    
    </div>
  )
}

export default Card