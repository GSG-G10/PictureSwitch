import React from 'react'
import Logo from './HeaderLogo'
import Input from './HeaderInput'

const Header = ({handleChange}) =>{
    return (
        <header className="header">
        <Logo/>
        <Input handleChange= {handleChange}/>
        </header>
    )
}
export default Header