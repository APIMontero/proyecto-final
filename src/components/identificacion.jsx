import "../css/identificacion.css";
export function Identificacion(props) {
  let imagenes = `../img/`;
  let nombreCompleto = props.nombre + " " + props.apellidos;
  return (
    <div className="card__nombre">
      <img
        src={require(`${imagenes}${props.run}.jpg`).default}
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
