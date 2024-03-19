import { Route, Routes } from "react-router-dom"
import "../scss/App.scss"
import AboutMe from "./AboutMe"
import Header from "./Header"
import Hero from "./Hero"
import Project from "./Project"
import Contacto from "./Contacto/Contacto"
import Footer from "./Footer"

import projects from "../services/dataProject.json";



function App() {



  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Project data={projects}/>


    <Routes>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>

    <Footer/>


    
    </>
  )

}

export default App
