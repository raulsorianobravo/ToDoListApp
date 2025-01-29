import React, { useState } from 'react'

const ItemForm = () => {
    
    //===============================================================
    const [id, setID] = useState("")
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")

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
    }
    //===============================================================
  
    return (
    <div>ItemForm
        <form className='ItemForm' onSubmit={handleSubmit}>ItemForm
        <br></br>
        <input type="text" className='item-input' placeholder='Item Number' onChange={handleChangeId}>
        </input>
        <br></br>
         <input type="text" className='item-input' placeholder='Title' onChange={handleChangeTitle}>
        </input>
        <br></br>
        <input type="text" className='item-input' placeholder='Description' on onChange={handleChangeDescription}>
        </input>
        <br></br>
        <button type="submit" className='item-btn'>Add Item</button>
        </form>
    </div>
  )
}

export default ItemForm