import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Educations"



function App() {

  return (
    <>
      <div className="bg-slate-900 xl:flex xl:justify-center xl:h-full">
        <div className="xl:w-[1300px]">
          <NavBar/>
          <Home/>
          <About />
          <Education />
        </div>
      </div>
    </>
  )
}

export default App
