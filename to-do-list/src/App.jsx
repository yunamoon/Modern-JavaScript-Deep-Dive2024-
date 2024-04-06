import { useRef, useReducer} from 'react';
import './App.css'
import Editor from './components/editor/Editor'
import Header from './components/header/Header'
import List from './components/list/List'

function reducer(state, action){
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item)=> item.id === action.targetId? {...item, isDone:!item.isDone} : item);
    case 'DELETE':
      return state.filter((item)=> item.id !== action.targetId);
    default:
      return state;
    }
}

function App() {

  // const [items, setItems] = useState([]);
  const [items , dispatch] = useReducer(reducer,[]);

  const idRef = useRef(1);


  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      },
    })
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId : targetId,
    })
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
