import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>RePelis</h1>
      </header>

      <section id="content" className="content">
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />

        <Crear setListadoState={setListadoState} />
      </aside>

      <footer className="footer">
        &copy; Jared Marquez{" "}
        <a href="https://courageous-toffee-4be3ce.netlify.app">zeuqram.com</a>
      </footer>
    </div>
  );
}

export default App;
