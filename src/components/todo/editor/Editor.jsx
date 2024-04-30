import { useRef, useState, useContext } from 'react';
import './Editor.css';
import { ToDoDispatchContext } from '../ToDoList';
import Button from '../../button/Button';

const Editor = () => {
  const {onCreate} = useContext(ToDoDispatchContext );
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if(content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className='Editor'>
      <input 
      ref={contentRef}
      onKeyDown={onKeydown}
      value={content}  
      onChange={onChangeContent} 
      placeholder='새로운 to do를 작성해주세요!'/>
      <Button onClick={onSubmit} text={'추가'} id={2} />
    </div>
  )
}

export default Editor