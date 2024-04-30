import { useMemo, useState, useContext } from 'react';
import './List.css';
import Item from './item/Item';
import { ToDoStateContext } from '../ToDoList';

const List = () => {
  const items = useContext( ToDoStateContext);
  const [search , setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilter = ()=> {
    if(search ==="") {
      return items;
    }
    return items.filter(
      (item)=> item.content.toLowerCase().includes(search.toLowerCase()));
  };

 const filteredItems = getFilter();

 const {total, done, notDone} = 
  useMemo(()=> {
    const total = items.length;
    const done = items.filter((item)=> item.isDone).length;
    const notDone = total - done;
    return {
      total,
      done,
      notDone
    }
  }, [items]);

  return (
    <div className='List'>
      <h4>To do List ✅</h4>
      {/* <div>
        <div>total : {total}</div>
        <div>done : {done}</div>
        <div>notDone : {notDone}</div>
      </div> */}
      <input 
      value={search}
      onChange={onChangeSearch}
      placeholder='검색어를 입력하세요.'/>
      <div className='todo_wrap'>
        {filteredItems.map((item)=> {
          return <Item key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default List