import "../css/alumnos.css";
import { Identificacion } from "./identificacion.jsx";
import { Promocion } from "./promocion.jsx";
export function TarjetaAlumno(props) {
  <>
    <section className="card">
      {" "}
      {/*Recordar las props para cada componente funcional */}{" "}
      <Identificacion
        run={props.run}
        apellidos={props.apellidos}
        nombres={props.nombres}
      />{" "}
      <hr />{" "}
      <Promocion agnoEscolar={props.agnoEscolar} promedio={props.promedio} />{" "}
      <hr />
    </section>
    ;{" "}
  </>;
}

/*
Props usadas 🎆
run={props.run}
apellidos={props.apellidos}
nombres={props.nombres}
agnoEscolar={props.agnoEscolar}
promedio={props.promedio}

*/
