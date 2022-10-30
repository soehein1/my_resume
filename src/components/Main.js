import React from 'react'
import '../static/css/Main.css'
import Section from './Section'
function Main({data}) {
    
  return (
    <div className='main_container'>
        <div className='name'>
            Sohile Rashid
        </div>
        <div className='body'>
           {
            data.map((section)=>(<Section section ={section}/>))
           }

        </div>
    </div>
  )
}

export default Main