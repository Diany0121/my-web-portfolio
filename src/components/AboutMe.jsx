import "../scss/App.scss";

function AboutMe() {
  return (
    <article className="me">
      <div className="picture"></div>
      <div className="aboutme">
        <h3 className="aboutme_h3">sobre mi</h3>
        <p className="aboutme_p">
          Diseñadora gráfico y web. He diseñado por más de 4 años, comenzando
          con el diseño gráfico y luego ampliando mis conocimientos al diseño UX
          / UI, donde comencé a interesarme por la rama IT.
        </p>

        <p className="aboutme_p">
          Me considero una persona con facilidad para el aprendizaje,
          flexibilidad, iniciativa propia y cómoda adaptación a cualquier
          situación.
        </p>
      </div>
    </article>
  );
}

export default AboutMe;
