import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Educations"
import Skill from "./Components/Skill"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <div className="bg-slate-900 flex justify-center h-full sm:flex sm:justify-center sm:h-full md:flex md:justify-center md:h-full lg:flex lg:justify-center lg:h-full xl:flex xl:justify-center xl:h-full">
        <div className="w-[350px] sm:w-[610px] md:w-[718px] lg:w-[974px] xl:w-[1230px]">
          <div className="sticky top-0">
            <NavBar/>
          </div>
          <div className="">
            <Home/>
            <About />
            <Education />
            <div className="relative">
              <Skill />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
