import { useState, useRef} from 'react';
import './App.css'
import Editor from './components/editor/Editor'
import Header from './components/header/Header'
import List from './components/list/List'

const mockData = [
  {
    isDone : false,
    id : 0,
    content : "react test",
    date : new Date().getTime(),
  },
  {
    isDone : false,
    id : 2,
    content : "react project",
    date : new Date().getTime(),
  },
];

function App() {

  const [items, setItems] = useState(mockData);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
      insDone : false,
      content : content,
      date : new Date().getTime(),
    }

    setItems([newItem , ...items])
  }

  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List items={items}/>
    </div>
  )
}

export default App
