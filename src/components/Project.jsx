import "../scss/App.scss";
import CardProject from "./CardProject";

function Project() {
  return (
    <div className="project">
        <h3 className="project_h3">proyectos</h3>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        
    </div>
  )
}

export default Project