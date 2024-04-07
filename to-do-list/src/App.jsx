import { useRef, useReducer, useCallback, createContext, useMemo} from 'react';
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

export const ItemsStateContext = createContext();
export const ItemsDispatchContext = createContext();

function App() {

  // const [items, setItems] = useState([]);
  const [items , dispatch] = useReducer(reducer,[]);

  const idRef = useRef(1);


  const onCreate =  (content) => {
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

  const onUpdate = useCallback ((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  }, []);

  const onDelete = useCallback ((targetId) => {
    dispatch({
      type:"DELETE",
      targetId : targetId,
    })
  }, []);

  const memoDispatch = useMemo(()=> {
    return {onCreate,onUpdate,onDelete};
  }, []);

  return (
    <div className='App'>
    <Header/>
    <ItemsStateContext.Provider value={items}>
    <ItemsDispatchContext.Provider value={memoDispatch}>
    <Editor/>
    <List/>
    </ItemsDispatchContext.Provider>
    </ItemsStateContext.Provider>

    </div>
  )
}

export default App
