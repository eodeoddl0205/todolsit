import './css/item.css'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  const onDelete = () => {
    props.onDelete(props.id);
  }

  const onToggle = () => {
    props.onToggle(props.id);
  }

  return (
    <div>
      <div className="container">
        <label className='small-container' onChange={onToggle}>
          <input type='checkbox'></input>
          <div className={props.completed ? 'cheak cheakbox' : 'cheakbox'}>
            <FontAwesomeIcon icon={faCheck} className={props.completed ? 'ap' : 'hide'} />
          </div>
          <div className={props.completed ? 'line text' : 'text'}>{props.content}</div>
        </label>
        <FontAwesomeIcon className='icon' icon={faCircleMinus} onClick={onDelete}/>
      </div>
    </div>
  )
}

export default Item;