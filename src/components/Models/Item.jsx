import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = props => {

    const {item, toggleComplete, deleteItem, editItem} = props

  return (
    <div className='Item'>
        <FontAwesomeIcon className='check-icon' icon = {faCheckCircle} onClick={() => toggleComplete(item.id)}/>
    <div>
      <p className={`${item.isCompleted ? 'completed' : ""}`}> {item.id}. {item.title}</p>
      <p className={`${item.isCompleted ? 'completed' : ""}`}> {item.description}</p>
      </div>
      <div>
        <FontAwesomeIcon className={`${item.isCompleted ? 'noedit-icon' : "edit-icon"}`} icon = {faPenToSquare} onClick={() => editItem(item.id)} />
        <FontAwesomeIcon className='delete-icon' icon = {faTrash} onClick={() => deleteItem(item.id)}/>
      </div>
    </div>  )
}

export default Item