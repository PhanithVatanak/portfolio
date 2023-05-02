import NavBar from "./Components/NavBar"
import Home from "./Components/Home"

function App() {

  return (
    <>
      <div className="bg-slate-900 xl:flex xl:justify-center xl:h-screen">
        <div className="xl:w-[1300px]">
          <NavBar/>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
