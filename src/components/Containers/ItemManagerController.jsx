import React, { useState } from 'react'
import ItemForm from '../Forms/ItemForm'
import {v4 as uuidv4} from 'uuid'
import Item from '../Models/Item'

uuidv4()

const ItemManagerController = () => {
    
   const [listItems, setListItems ] = useState([])

   const addItem = (id, title, description) => {
    console.log("received:", id,title,description)    
    setListItems([...listItems, {uid: uuidv4(), id:id, title: title , description: description, createAt:(new Date()).toJSON(), isCompleted:false, isEditing:false}])
        console.log(listItems)
    }
    
    const toggleComplete = id =>{
        setListItems(listItems.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted}:item))
        console.log(listItems)
    }

    return (
        <div className='ItemManagerController'>
        ItemManagerController
        <ItemForm addItem={addItem} />
        {listItems.map((item,index) => <Item item = {item} key={index} toggleComplete={toggleComplete} />)}        
    </div>
  )
}

export default ItemManagerController