import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {

  const evitarRecarga = (event) => {
    event.preventDefault(); 
  }

  const [busqueda, setBusqueda] = useState("");

  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let pelis_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>

      {noEncontrado === true && busqueda.length > 1 && (
        <span className="no-encontrado">
          No se encontro ninguna coincidencia
        </span>
      )}

      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          value={busqueda}
          onChange={buscarPeli}
        />
        <button id="search" onClick={evitarRecarga}>
          Buscar
        </button>
      </form>
    </div>
  );
}
