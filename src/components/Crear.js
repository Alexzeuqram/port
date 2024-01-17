import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliSate] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    if (titulo === '' || descripcion === '') {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    }

    setPeliSate(peli);

    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    GuardarEnStorage("pelis", peli);

  
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {titulo && descripcion && "has creado la pelicula: " + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />

        <textarea
          id="description"
          name="descripcion"
          placeholder="Descripcion"
        ></textarea>

        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
}
