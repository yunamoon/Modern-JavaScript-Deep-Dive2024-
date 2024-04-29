import React, { useEffect, useState } from 'react'
import { cardContetns } from '../util/cardContents';
import { useNavigate } from 'react-router-dom';

const useCurrentWidget = (id) => {
    const nav = useNavigate();
    const [ currentWidget , setCurrentWidget ] = useState();
    console.log(id)
    useEffect(()=>{
    const currentData= cardContetns.find((item)=> Number(item.id) === Number(id));
    console.log(currentData)
    setCurrentWidget(currentData);
    }, [id]);

  return currentWidget;
}

export default useCurrentWidget