import "../scss/App.scss"
import AboutMe from "./AboutMe"
import Header from "./Header"
import Hero from "./Hero"
import Project from "./Project"
import project from "../services/dataProject.json"


function App() {



  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Project project={project}/>
    
    </>
  )

}

export default App
