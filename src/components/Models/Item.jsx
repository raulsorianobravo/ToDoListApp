import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = () => {
  return (
    <div className='Item'>
      <p>Go to School</p>
      <div>
        <FontAwesomeIcon icon = {faPenToSquare} />
        <FontAwesomeIcon icon = {faTrash} />
      </div>
    </div>  )
}

export default Item