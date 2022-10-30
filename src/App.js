import './static/css/App.css'
import SideBar from './components/SideBar'
import React from 'react'
import Main from './components/Main'
import getData from './static/data'


function App() {
  const data = getData('section')
  const skill = getData('skills')


  return (
    <div className='App'>
      <SideBar />
      <Main data={data} skill = {skill} />
    </div>
  )
}

export default App
