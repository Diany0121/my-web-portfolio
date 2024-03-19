import "../scss/App.scss";

function CardProject({ dataproject }) {
  return (
    <article className="card">
      <img className="card_img" src={dataproject.imagen} alt="Imagen" />
      <h3 className="card_title">{dataproject.title}</h3>
      <p className="card_tech">{dataproject.technologies}</p>
      <div>
        <a href="" target="_blank">
          <i class="fa-sharp fa-solid fa-code"></i>
        </a>

        <a href="" target="_blank">
          <i class="fa-solid fa-desktop"></i>
        </a>
      </div>
    </article>
  );
}

export default CardProject;
