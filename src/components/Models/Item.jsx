import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = props => {

    const {item, toggleComplete, deleteItem} = props

  return (
    <div className='Item'>
        <FontAwesomeIcon icon = {faCheckCircle} onClick={() => toggleComplete(item.id)}/>
    <div>
      <p className={`${item.isCompleted ? 'completed' : ""}`}> {item.id}. {item.title}</p>
      <p className={`${item.isCompleted ? 'completed' : ""}`}> {item.description}</p>
      </div>
      <div>
        <FontAwesomeIcon icon = {faPenToSquare}  />
        <FontAwesomeIcon icon = {faTrash} onClick={() => deleteItem(item.id)}/>
      </div>
    </div>  )
}

export default Item