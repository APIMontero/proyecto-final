import React from "react";
import "../css/estilos.css";
import datAlumno from "../data/alumnos.json";
import { Cabecera } from "./header.jsx";
import { Identificacion } from "./identificacion.jsx";
import { Promocion } from "./promocion.jsx";
export const ShowAlumnos = () => {
  let data = [];
  data = datAlumno;
  return (
    <>
      <Cabecera />{" "}
      {data.map((item) => (
        <section className="card">
          <div key={item.id}>
            <div className="card__perfil">
              <Identificacion
                run={item.run}
                apellidos={item.apellidos}
                nombres={item.nombres}
              />{" "}
              <hr />
              <Promocion
                agnoEscolar={item.agnoEscolar}
                promedio={item.promedio}
              />{" "}
              <hr />
              <div className="card__button">
                <a className="enlace" href="#top">
                  Subir{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      ))}{" "}
    </>
  );
};
