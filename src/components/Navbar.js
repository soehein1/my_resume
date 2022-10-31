import React from 'react'
import Logo from './Logo'
import '../static/css/Navbar.css'
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Logo />
            </div>
        </div>
    )
}

export default Navbar