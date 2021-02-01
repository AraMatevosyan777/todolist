import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
    return (
        <div className='header'>
            <NavLink activeClassName='active' to='/home'>Home</NavLink>
            <NavLink activeClassName='active' to='/create-to-do'>Create to do</NavLink>
        </div>
    )
}
