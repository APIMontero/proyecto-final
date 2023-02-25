import "../css/estilos.css";
export function Promocion(props) {
  //Promocion de acuerdo a la nota y al género
  let esPromovido = ""; //Nota
  let clasePromovido = "";

  if (props.promedio < 4.0) {
    clasePromovido = "NoPromovido";
    esPromovido =
      props.genero === "F" ? "no ha sido promovida" : "no ha sido promovido";
  } else {
    //range[4.0-7.0]
    clasePromovido = "Promovido";
    esPromovido =
      props.genero === "F" ? "ha sido promovida" : "ha sido promovido";
  }
  return (
    <>
      <div className="card__descripcion">
        <p>
          {" "}
          Nota promedio del año <strong> {props.agnoEscolar} </strong> fue de un{" "}
          <strong className={clasePromovido}> {props.promedio} </strong>{" "}
        </p>{" "}
        <p>
          {" "}
          Por lo tanto,{" "}
          <strong className={clasePromovido}> {esPromovido} </strong> al
          siguiente año o nivel.{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
}
