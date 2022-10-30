import './static/css/App.css'
import SideBar from './components/SideBar'
import React from 'react'
import Main from './components/Main'
import getData from './static/data'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    setData(getData())
  }, [])

  
  return (
    <div className='App'>
      <SideBar />
      <Main data={data} />
    </div>
  )
}

export default App
