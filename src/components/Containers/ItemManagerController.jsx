import React, { useEffect, useState } from 'react'
import ItemForm from '../Forms/ItemForm'
import {v4 as uuidv4} from 'uuid'
import Item from '../Models/Item'
import EditItemForm from '../Forms/EditItemForm'

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

    const deleteItem = id => {
        setListItems(listItems.filter(item => item.id !=id))
      }

      const editItem = id => {
        setListItems(listItems.map(item => item.id === id ? {...item, isEditing: !item.isEditing}:item))
        console.log(listItems)

      }

      const editItemForm = (itemid, itemTitle, ItemDescription, id) => {
        console.log(itemid, itemTitle, ItemDescription)
        setListItems(listItems.map(item => item.id === id ? {...item, id:itemid, title:itemTitle, description:ItemDescription, isEditing: !item.isEditing}:item))
      }

          //--- Update the list at evey change. Not Forced the update
    useEffect(() => {
      const LoadDataAPI = async () => {
          const res = await fetch('https://localhost:7119/api/ToDoList')
          const dataList = await res.json()
          setListItems([...dataList]);
      }
      LoadDataAPI()
    }, [])

    return (
        <div className='ItemManagerController'>
        ItemManagerController
        <ItemForm addItem={addItem} />
        {listItems.map( (item,index) => 
            (item.isEditing 
            ? (<EditItemForm key={index} editItem={editItemForm} item={item}/>) 
            : (<Item item = {item} key={index} toggleComplete={toggleComplete} deleteItem={deleteItem} editItem={editItem}/>)
            )
        )}        
    </div>
  )
}

export default ItemManagerController