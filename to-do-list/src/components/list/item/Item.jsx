import './Item.css';

const Item = ({isDone, content, date}) => {
  return (
    <div className="Item">
      <input type="checkbox" checked={isDone} readOnly/>
      <div className="contents">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  )
}

export default Item