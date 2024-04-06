import { useState } from 'react';
import './List.css';
import Item from './item/Item';

const List = ({items}) => {

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

  return (
    <div className='List'>
      <h4>To do List ✅</h4>
      <input 
      value={search}
      onChange={onChangeSearch}
      placeholder='검색어를 입력하세요.'/>
      <div className='todo_wrap'>
        {filteredItems.map((item)=> {
          return <Item key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default List