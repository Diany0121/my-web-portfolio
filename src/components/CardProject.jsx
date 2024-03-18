import "../scss/App.scss";

function CardProject({project}) {

  return (
    <article>
      <img src={project.imagen} alt="imagen" />
      <p>{project.title}</p>
    </article>
  );
}

export default CardProject;
