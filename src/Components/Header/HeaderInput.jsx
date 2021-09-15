import React from 'react'
const Input = ({handleChange}) =>{
    return (
        <div className="search-input">
            <input 
            type="text" 
            name="search" 
            placeholder="Please enter category name" 
            onChange = {(e)=> handleChange(e) }
            
            />
            </div>
    )
}
export default Input