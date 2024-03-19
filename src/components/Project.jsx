import "../scss/App.scss";
import CardProject from "./CardProject";

function Project({ data }) {
  const mapeoData = () => {
    return data.map((project, i) => (
      <li className="project" key={i}>
        <CardProject dataproject = {project}/>
      </li>
    ));
  };

  return (
    <>
    <h3 className="project_h3">proyectos</h3>
    <ul>
      {mapeoData()}
    </ul>
    </>

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
