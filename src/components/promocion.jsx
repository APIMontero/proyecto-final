import "../css/promocion.css";
export function Promocion(props) {
  /*
          props: promedio,agnoEscolar, esPromovido:si promedio >=4.0, contrario No es promovido
        */
  let esPromovido =
    props.promedio >= 4.0 ? "ha sido promovido" : "no ha sido promovido";
  return (
    <>
      <div className="card__descripcion">
        <p>
          {" "}
          Nota promedio del año <strong> {props.agnoEscolar} </strong> fue de un{" "}
          <strong> {props.promedio} </strong>{" "}
        </p>{" "}
      </div>{" "}
      <div className="card__descripcion">
        <p>
          {" "}
          Por lo tanto, <strong> {esPromovido} </strong> al siguiente año o
          nivel.{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
}
