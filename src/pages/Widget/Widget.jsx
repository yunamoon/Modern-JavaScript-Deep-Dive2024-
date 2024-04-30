import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Widget.css';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import useCurrentWidget from '../../hooks/useCurrentWidget';
import ToDoList from '../../components/todo/ToDoList';
import Weather from '../../components/weather/Weather';


const Widget = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentWidget = useCurrentWidget(params.id);
  
  if(!currentWidget) {
    return <div>로딩중 ...</div>;
  }

  return (
    <div>
      <Header title={currentWidget.task} 
      right={<Button text={'< Back'} id={1} onClick={()=>nav(-1,{replace:true})} />}/>
      <Card {...currentWidget}/>
      {currentWidget.task === 'To Do List' && <ToDoList/> }
      {currentWidget.task === 'Weather' && <Weather/> }
    </div>
  )
}

export default Widget;