import "../scss/App.scss";
import CardProject from "./CardProject";

function Project({ project }) {
  const mapeoProject = () => {
    return project.map((project, index) => (
      <li key={index}>
        <CardProject project={project} />
      </li>
    ));
  };

  return (
    <ul>
      {mapeoProject}
    </ul>

    // <div className="project">
    //     <h3 className="project_h3">proyectos</h3>
    //     <CardProject />
    //     <CardProject />
    //     <CardProject />
    //     <CardProject />
    // </div>
  );
}

export default Project;
