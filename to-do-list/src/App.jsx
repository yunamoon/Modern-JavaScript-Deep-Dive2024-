import { useState, useRef} from 'react';
import './App.css'
import Editor from './components/editor/Editor'
import Header from './components/header/Header'
import List from './components/list/List'

function App() {

  const [items, setItems] = useState([]);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }

    setItems([newItem , ...items])
  };

  const onUpdate = (targetId) => {
    setItems(items.map(item=> 
      item.id === targetId? 
      {...item, isDone: !item.isDone} 
      : item));
  };

  const onDelete = (targetId) => {
    setItems(items.filter((item)=> item.id !==targetId))
  }

  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List items={items} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
