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
  //data acá es una copia de alumnos.json y recorrerla, sinó esta es la manera:🌅
  data = ObtenerAlumnos();
  /* Objeto para representar un resumen por alerta o un mensaje emergente al final
     Caracteristica para version 2.0.0, ya que debo usar enrutamiento para ir a otra
     página web...Pienso en un boton...o un enlace tipo boton como el de las tarjetas 🤔
 /*  let resumenAlumnos = {
    promedio: 0,
    totalAlumnos: 0,
    promovidos: 0,
    noPromovidos: 0,
    hombres: 0,
    mujeres: 0,
    maxima: { nombre: "", nota: 0 },
    minima: { nombre: "", nota: 0 },
  }; */
  //let sumatoria = 0;
  /* data.map((item, indice) => item)); ...*/
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
              genero={item.genero}
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
