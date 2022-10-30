import React from 'react'

function Section({section}) {
  return (
    <div>
        <div>{section.name}</div>
        {
            section.events.map((event)=>(
                <div key = {event.id}>
                    <div>{event.date}</div>
                    <div>{event.explanation}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Section