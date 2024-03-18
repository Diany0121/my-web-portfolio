import "../scss/App.scss";

function Hero() {
  return (
    <>
      <article className="perfil">
        <div className="perfil_photo"></div>
        <h1 className="perfil_name">Diany Martínez</h1>
        <p className="perfil_job">
          Junior Front-End developer | UX/UI Design | Graphic Design
        </p>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/diany-martinez/"
            className="icon_link"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Diany0121"
            className="icon_link"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.behance.net/dianyluna31"
            className="icon_link"
            target="_blank"
          >
            <i class="fa-brands fa-behance"></i>
          </a>
        </div>

        <div className="containergeneral">
          <div className="container">
            <p className="container_email">dianymartinez31@gmail.com</p>
            <div className="container_copy">Copiar</div>
          </div>
          <div className="cv">CV</div>
        </div>
      </article>
    </>
  );
}

export default Hero;
