import "../css/cabecera.css";
export function Cabecera(props) {
  return (
    <>
      {" "}
      <div className="header-app">
        <h1> Alumnos destacados del curso </h1>{" "}
        <p className="descripcion">
          {" "}
          Felicitamos a los siguientes alumnos por sus logros.{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
}
