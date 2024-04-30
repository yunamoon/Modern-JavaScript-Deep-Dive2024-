import { memo, useContext } from 'react';
import './Item.css';
import { ToDoDispatchContext } from '../../ToDoList';

const Item = ({id, isDone, content, date}) => {
  const { onUpdate, onDelete} = useContext(ToDoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onDeleteItem = () => {
    onDelete(id);
  }
  return (
    <div className="Item">
      <input 
      onChange={onChangeCheckbox}
      type="checkbox" 
      checked={isDone}/>
      <div className="contents">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteItem}>삭제</button>
    </div>
  )
}

export default memo(Item);