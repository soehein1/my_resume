import React from 'react'
import '../static/css/ExperienceSection.css'
function ExperienceSection({item}) {
    return (
        <div key={item.id} className='experience-container'>
            <div className='item-name'>{item.name}</div>
            {
                item.events.map((event)=>(
                    <div className='event' key = {event.id}>
                        <div>{event.date}</div>
                        <div>{event.explanation}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExperienceSection