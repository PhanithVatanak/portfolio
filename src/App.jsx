import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Educations"
import Skill from "./Components/Skill"
import Contact from "./Components/Contact"


function App() {

  return (

      <div className="bg-slate-900 xl:flex xl:justify-center xl:h-full">
        <div className="">
          <NavBar/>
          <Home/>
          <About />
          <Education />
          <Skill />
          <Contact />
        </div>
      </div>
  )
}

export default App
