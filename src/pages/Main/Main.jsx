import React, { useEffect, useState } from 'react'
import './Main.css';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import { cardContetns } from '../../util/cardContents';
import { useNavigate } from 'react-router-dom';

const Main = ()=> {
  const nav = useNavigate();
  const [done , setDone] = useState();
  const [progress , setProgress] = useState();

  useEffect(()=>{
    setDone(cardContetns.filter(item => item.done === true).length);
    setProgress(cardContetns.filter(item => item.progress === true).length);
  }, 
  [cardContetns]);

  return (
    <div className='Main'>
    <Header 
    right={<Button text={'React Widget'}/>}
    title={'Main'}/>

    <section className='total_goal'>
      <h2 className='title'>React Widget</h2>
      <p className='comment'>리액트를 기반으로 가벼운 기능 단위 위젯을 개발하는 프로젝트입니다.</p>
      <div className='check'>
      <p>Done : {done}</p>
      <p>Progress : {progress} </p>
      </div>
    </section>

    <section className='card_section'>
      {cardContetns.map((item)=> (
             <Card 
             onClick={()=>nav(`/${item.id}`)}
             key={item.id}
             emoji={item.emoji} 
             task={item.task} 
             description={item.description}
             progress={item.progress} 
             done={item.done}/>
      ))};
    </section>

    </div>
  )
}

export default Main