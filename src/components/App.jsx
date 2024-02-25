import "../scss/App.scss"
import AboutMe from "./AboutMe"
import Header from "./Header"
import Hero from "./Hero"
import Project from "./Project"

function App() {

  const project = [
    {id: "1", nameProject: "Web Grupal"}
  ]



  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Project />
    
    </>
  )

}

export default App
