import './Item.css';

const Item = ({ id, isDone, content, date, onUpdate, onDelete}) => {

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

export default Item