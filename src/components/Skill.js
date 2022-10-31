import React from 'react'
import '../static/css/Skill.css'
function Skill({skill}) {
  return (
    <div className='skill-container' key={skill.id}>
        <div className='skill-name'>{skill.name}</div>
        <div className='skill-details'>{skill.explanation}</div>
    </div>
  )
}

export default Skill