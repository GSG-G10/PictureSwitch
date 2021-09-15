import React from 'react'
import './Header.css'
const Input = ({handleChange}) =>{
    return (
        <div className="search-input-container">
            <img className="search-icon" src="https://img.icons8.com/windows/32/000000/search--v2.png" alt="search icon"/>
            <input 
            className="search-input"
            type="text" 
            name="search" 
            placeholder="Search free high-resolution photos" 
            onChange = {(e)=> handleChange(e) }
            
            />
            </div>
    )
}
export default Input