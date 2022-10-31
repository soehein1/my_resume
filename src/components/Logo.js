import React from 'react'
import '../static/css/Logo.css'
import profilePic from '../static/img/profile_pic.jpg'
function Logo() {
    return (
        <div className='logo'>
            <div className='img-container'>
                <img src={profilePic} alt='S' />
            </div>
            <div className='name'>

                <div className='first-name'>Sohile</div>
                <div className='last-name'>Rashid</div>
            </div>
        </div>
    )
}

export default Logo