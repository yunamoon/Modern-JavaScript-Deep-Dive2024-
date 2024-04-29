import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Widget.css';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import useCurrentWidget from '../../hooks/useCurrentWidget';

const Widget = () => {
  const params = useParams();
  const nav = useNavigate();
  console.log(params.id)
  const currentWidget = useCurrentWidget(params.id);
  
  if(!currentWidget) {
    return <div>로딩중 ...</div>;
  }

  return (
    <div>
      <Header title={'To Do list'} right={<Button text={'< Back'} onClick={()=>nav(-1)}/>}/>
      <Card {...currentWidget}/>
    </div>
  )
}

export default Widget;