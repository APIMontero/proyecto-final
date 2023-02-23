import "../css/identificacion.css";

export function Identificacion(props) {
  let nombreCompleto = props.nombres + " " + props.apellidos;
  let imgLocale = "http://localhost:3000/img/";
  return (
    <div className="card__nombre">
      {" "}
      <img
        src={`${imgLocale}${props.run}.jpg`}
        alt={`Imagen de ${nombreCompleto}`}
      />{" "}
      <h2>
        <strong> {nombreCompleto} </strong>{" "}
      </h2>{" "}
      <p>
        Rol Único Nacional: <strong> {`${props.run}`} </strong>{" "}
      </p>{" "}
    </div>
  );
}
