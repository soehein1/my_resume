import React from 'react'
import '../static/css/SideBar.css'
import profilepic from '../static/img/profile_pic.jpg'
function SideBar() {
    return (
        <div className='sidebar'>
            <div className='logo'>

                <img className='img' src={profilepic} alt='sohile' />
            </div>
            <div className='item'>Social Network</div>
            <div className='item'></div>
            <div className='item'>Social Network</div>
            <div className='item'>Social Network</div>

        </div>
    )
}

export default SideBar