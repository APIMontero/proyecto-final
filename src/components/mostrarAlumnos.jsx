import React, { useEffect, useState } from "react";
import "../css/estilos.css";
import { Cabecera } from "./header.jsx";
import { Identificacion } from "./identificacion.jsx";
import { Promocion } from "./promocion.jsx";

/**
 * Para ser usado en método Sort de un array de objetos
 * @param {
 * } nombreCampo
 * @returns Si es usado con método Sort un array ordenado de forma descendente
 */
function PorCampo(nombreCampo) {
  return (a, b) => (a[nombreCampo] < b[nombreCampo] ? 1 : -1);
}

/**
 * Returns an Object Array from JSON File
 * @returns Object Array
 */
function ObtenerAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetch("json/alumnos.json")
      .then((response) => response.json())
      .then((datos) => {
        setAlumnos(datos);
      });
  }, []);

  return alumnos.sort(PorCampo("promedio"));
}
export const ShowAlumnos = () => {
  //Forma rápida ✈ para leer la data desde el archivo
  // Un arreglo
  let data = [];
  //data acá es una copia de alumnos.json
  data = ObtenerAlumnos();
  return (
    <>
      <Cabecera />{" "}
      {data.map((item, indice) => (
        <section className="card" key={indice}>
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
        </section>
      ))}{" "}
    </>
  );
};
