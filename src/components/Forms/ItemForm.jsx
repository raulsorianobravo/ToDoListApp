import React from 'react'

const ItemForm = () => {
  return (
    <div>ItemForm
        <form className='ItemForm'>ItemForm
        <br></br>
        <input type="text" className='item-input' placeholder='Item Number'>
        </input>
        <br></br>
         <input type="text" className='item-input' placeholder='Title'>
        </input>
        <br></br>
        <input type="text" className='item-input' placeholder='Description'>
        </input>
        <br></br>
        <button type="submit" className='item-btn'>Add Item</button>
        </form>
    </div>
  )
}

export default ItemForm