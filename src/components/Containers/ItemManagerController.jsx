import React, { useEffect, useState } from 'react'
import ItemForm from '../Forms/ItemForm'
import {v4 as uuidv4} from 'uuid'
import Item from '../Models/Item'
import EditItemForm from '../Forms/EditItemForm'
import reactLogo from '../../assets/react.svg'


uuidv4()

const ItemManagerController = () => {
    
  //=========================================================================
  const [listItems, setListItems ] = useState([])

  //=========================================================================

  const api = import.meta.env.VITE_APP_API_URI
   
  //console.log(api)

  const addItem = async (id, title, description) => {
      console.log("received:", id,title,description)    
      const todo = {
        "id": id,
        "title": title,
        "description": description,
        "isCompleted": false,
        "createdAt": (new Date()).toJSON()
      }
      const dataItem = {uid: uuidv4(), id:id, title: title , description: description, createAt:(new Date()).toJSON(), isCompleted:false, isEditing:false}
    
      //--- TODO hardcode!
      const res = await fetch('https://localhost:7119/api/ToDoList', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(todo)
      })
      const dataList = await res.json()

      setListItems([...listItems, {uid: uuidv4(), id:id, title: title , description: description, createAt:(new Date()).toJSON(), isCompleted:false, isEditing:false}])
          console.log(listItems)
  }

  //=========================================================================
    
  const toggleComplete = async itemOld =>{
      
    const item = {
      "id": itemOld.id,
      "title": itemOld.title,
      "description": itemOld.description,
      "isCompleted": !itemOld.isCompleted,
      "createdAt": itemOld.createdAt
  }

  console.log(itemOld.id)
  const idTemp = itemOld.id
  const res = await fetch(`https://localhost:7119/api/ToDoList/${itemOld.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
      })
  
  //.then(res => res.text()) // or res.json()
  //.then(res => console.log(res))
  //const dataList = res.json()

  const resGet = await fetch('https://localhost:7119/api/ToDoList')
  const dataList = await resGet.json()
  setListItems([...dataList]);  
    
    
    
  setListItems(listItems.map(item => item.id === itemOld.id ? {...item, isCompleted: !item.isCompleted}:item))
      console.log(listItems)
  }
  //=========================================================================
  
  const deleteItem = async id => {
    const todo = {
      "id": id,
      "title": "-",
      "description": "-",
      "isCompleted": "-",
      "createdAt": "-"
    }
    console.log(id)
    const idTemp = id
    //--- TODO hardcode!
    const res = await fetch(`https://localhost:7119/api/ToDoList/${id}`, {
        method: 'DELETE'
    })
    //.then(res => res.text()) // or res.json()
    //.then(res => console.log(res))
    //const dataList = res.json()
    const res2 = await fetch('https://localhost:7119/api/ToDoList')
    const dataList = await res2.json()
        
    setListItems(listItems.filter(item => item.id !=id))
  } 

  //=========================================================================
  
  const editItem = id => {
      setListItems(listItems.map(item => item.id === id ? {...item, isEditing: !item.isEditing}:item))
      console.log(listItems)

  }

  //=========================================================================
  
  const editItemForm = async (itemid, itemTitle, ItemDescription, id) => {
      console.log(itemid, itemTitle, ItemDescription, id)
      
      const item = {
        "id": id,
        "title": itemTitle,
        "description": ItemDescription,
        "isCompleted": false,
        "createdAt": addItem.createdAt
    }

    console.log(id)
    const idTemp = id
    const res = await fetch(`https://localhost:7119/api/ToDoList/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
        })
    
    //.then(res => res.text()) // or res.json()
    //.then(res => console.log(res))
    //const dataList = res.json()
    const resGet = await fetch('https://localhost:7119/api/ToDoList')
    const dataList = await resGet.json()
    setListItems([...dataList]);  
    //setListItems(listItems.map(item => item.id === id ? {...item, id:itemid, title:itemTitle, description:ItemDescription, isEditing: !item.isEditing}:item))
  }

  //=========================================================================
  
  //--- Update the list at evey change. Not Forced the update
  useEffect(() => {
      const LoadDataAPI = async () => {
        //const res = await fetch('https://localhost:7119/api/ToDoList')
        const res = await fetch(api)
        const dataList = await res.json()
          setListItems([...dataList]);
      }
      LoadDataAPI()
    }, [])

  //=========================================================================
  
  return (
    <div className='ItemManagerController'>
              <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Item Manager</h2>
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