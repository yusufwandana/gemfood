import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
        className={isOpen ? 'dropdown active' : 'hidden'}
        onClick={toggle}
        >
            <Link className="navbar-dropdown-link" to="/">Home</Link>
            <Link className="navbar-dropdown-link" to="/product">Product</Link>
            <Link className="navbar-dropdown-link" to="/about">About</Link>
            <Link className="navbar-dropdown-link" to="/contact">Contact</Link>
        </div>
    )
}

export default Dropdown
