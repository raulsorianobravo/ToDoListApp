import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = props => {

    const {item} = props

  return (
    <div className='Item'>
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.description}</p>

      <div>
        <FontAwesomeIcon icon = {faPenToSquare} />
        <FontAwesomeIcon icon = {faTrash} />
      </div>
    </div>  )
}

export default Item