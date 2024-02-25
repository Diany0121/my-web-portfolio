import "../scss/App.scss";

function CardProject({project}) {

  return (
    <article>
      <img src={project.imagen} alt="imagen" />
      <p>{project.title}</p>
    </article>
    // <div className="div">
    //   <div className="card">
    //     <img src="" alt="" />
    //   </div>
    //   <div className="info">
    //     <p className="info_nameProject">Web Grupal</p>
    //     <p className="info_aboutProject" >HTML | CSS | Diseño responsive </p>
    //     {/* <a href="" className="icon_link" target="_blank">
    //       <i class="fa-brands fa-github"></i>
    //     </a> */}
    //   </div>
    // </div>
  );
}

export default CardProject;
