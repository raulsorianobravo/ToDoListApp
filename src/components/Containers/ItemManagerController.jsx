import React, { useState } from 'react'
import ItemForm from '../Forms/ItemForm'
import {v4 as uuidv4} from 'uuid'

uuidv4()

const ItemManagerController = () => {
    
   const [listItems, setListItems ] = useState([])

   const addItem = (id, title, description) => {
    console.log("received:", id,title,description)    
    setListItems([...listItems, {uid: uuidv4(), id:id, title: title , description: description, createAt:(new Date()).toJSON(), isCompleted:false, isEditing:false}])
        console.log(listItems)
    } 

    return (
        <div className='ItemManagerController'>
        ItemManagerController
        <ItemForm addItem={addItem} />
    </div>
  )
}

export default ItemManagerController