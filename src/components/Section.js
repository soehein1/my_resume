import React from 'react'
import '../static/css/Section.css'
function Section({section,type}) {
  return (
    <div className='section'>
        <div className='section-title'>{type ==='object'?section.name:"My Skills"}</div>
        {
            type === 'object'?
            section.events.map((event)=>(
                <div className='event' key = {event.id}>
                    <div className='event-date'>{event.date?event.date:event.name}</div>
                    <div className='explanation'>{event.explanation}</div>
                </div>
            )):section.map((skill)=>(
              <div className='event' key = {skill.id}>
                    <div className='event-date'>{skill.name}</div>
                    <div>{skill.explanation}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Section