import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ExperienceSection from "./components/ExperienceSection"
import './static/css/App.css'
import getData from './static/data'
import Skill from "./components/Skill"
function App() {
   const data = getData('section')
   const skills = getData('skills')


  return (
    <div className='App'>
      <Navbar />

      <div className="body">
        <Sidebar />
        <div className="main">
          <div className="experience-section">
            {
              data.map((item)=>(<ExperienceSection item ={item}/>))
            }
            
          </div>
          <div className="skill-section">
            {
              skills.map((skill)=>(
                <Skill skill ={skill}/>
              ))
            }

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
