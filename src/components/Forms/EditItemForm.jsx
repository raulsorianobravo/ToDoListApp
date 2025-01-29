import React, { useState } from 'react'

const EditItemForm = props => {
    
    const {editItem, item} = props

    //===============================================================
    const [id, setID] = useState(item.id)
    const [title,setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)

    //===============================================================
    const handleChangeId = e => {
        setID(e.target.value)
        //console.log(e.target.value)
        console.log(id)
    }
    //===============================================================
    const handleChangeTitle =  e => {
        setTitle(e.target.value)
        //console.log(e.target.value)
        console.log(title)
    }
    //===============================================================
    const handleChangeDescription =  e => {
        setDescription(e.target.value)
        //console.log(e.target.value)
        console.log(description)
    }
  
    const handleSubmit = e => {
        e.preventDefault()
        console.log(id, title, description)
        editItem(id, title, description, item.id)
        setID("")
        setTitle("")
        setDescription("")
    }
    //===============================================================
  
    return (
    <div>
        <form className='ItemFormEdit' onSubmit={handleSubmit}><h7 className="placeholder">Edit the values</h7>
        <br></br>
        <input type="text" className='item-input-edit' value={id} placeholder='Edit Item Number' onChange={handleChangeId}>
        </input>
        <br></br>
         <input type="text" className='item-input-edit' value={title} placeholder='Edit Title' onChange={handleChangeTitle}>
        </input>
        <br></br>
        <input type="text" className='item-input-edit' value={description} placeholder='Edit Description' onChange={handleChangeDescription}>
        </input>
        <br></br>
        <button type="submit" className='item-btn-edit'>Update Item</button>
        </form>
    </div>
  )
}

export default EditItemForm