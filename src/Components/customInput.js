import React, { useState } from 'react';
import './css/customInput.css';

const CustomInput = (props) => {
  const [content, setContent] = useState('');

  const changeContent = (event) => {
    setContent(event.target.value);
  }

  const onSubmit = () => {
    props.onAdd(content);
    setContent('');
  }

  return(
    <div className="customInput">
      <input type="text" placeholder="Add Todo..." value={content} onChange={changeContent}></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default CustomInput;