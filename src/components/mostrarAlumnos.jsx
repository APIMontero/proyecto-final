import React from "react";
import datAlumno from "../data/alumnos.json";
import { Cabecera } from "./header";
//import { TarjetaAlumno } from "./tarjetaAlumno.jsx";
import { Identificacion } from "./identificacion.jsx";
import { Promocion } from "./promocion.jsx";

export const ShowAlumnos = () => {
  let data = datAlumno;
  return (
    <>
      {" "}
      <Cabecera />{" "}
      {data.map((item) => (
        <div key={item.id}>
          <section className="card">
            {" "}
            <Identificacion
              run={item.run}
              apellidos={item.apellidos}
              nombres={item.nombres}
            />{" "}
            <hr />{" "}
            <Promocion
              agnoEscolar={item.agnoEscolar}
              promedio={item.promedio}
            />{" "}
            <hr />
          </section>{" "}
        </div>
      ))}{" "}
    </>
  );
};
