import "../scss/App.scss";

function Header() {
  return (
    <>
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_li">sobre mi</li>
          <li className="nav_li">habilidades</li>
          <li className="nav_li">proyectos</li>
          <li className="nav_li">contacto</li>
        </ul>

        <div className="iconnav">
          <a
            href="https://www.linkedin.com/in/diany-martinez/"
            className="iconnav_linknav"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Diany0121"
            className="iconnav_linknav"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.behance.net/dianyluna31"
            className="iconnav_linknav"
            target="_blank"
          >
            <i class="fa-brands fa-behance"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
