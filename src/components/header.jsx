import "../css/estilos.css";
export function Cabecera() {
  return (
    <>
      {" "}
      <div className="header-app" id="cabecera">
        <h1> Alumnos Destacados </h1>{" "}
        <blockquote
          cite="https://www.universia.net/mx/actualidad/orientacion-academica/como-se-mide-exito-estudiante-1161145.html"
          className="descripcion"
        >
          El rendimiento académico está determinado por la interacción de
          factores sociales, institucionales y personales con la visión de
          elevar la calidad de la educación.{" "}
        </blockquote>{" "}
        {/*< p className="descripcion">
                                              {" "}
                                              El rendimiento académico está determinado por la interacción de
                                              factores sociales, institucionales y personales con la visión de
                                              elevar la calidad de la educación.{" "}
                                            </p>{" "} */}{" "}
      </div>{" "}
    </>
  );
}
