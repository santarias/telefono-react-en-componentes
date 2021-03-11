import { useState } from "react";
import Teclado from "./components/Teclado";
const maxDigitos = 9;

let temporizador;

function App() {
  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const esNumeroCompleto = numero.length === maxDigitos;

  const anyadirDigito = digito => {
    if (numero.length < maxDigitos) {
      setNumero(numero + digito);
    }
  };
  const borrarUltimoDigito = () => setNumero(numero.slice(0, -1));
  /* const borrarNumero = () => setNumero(""); */

  const llamar = e => {
    e.preventDefault();
    if (esNumeroCompleto) {
      setLlamando(true);
      temporizador = setTimeout(() => {
        colgar();
      }, 5000);
    }
  };

  const colgar = e => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }

    setNumero("");
    setLlamando(false);
    clearTimeout(temporizador);
  };

  return (
    <div className="contenedor">
      <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <Teclado
            llamando={llamando}
            anyadirDigito={anyadirDigito}
            borrarUltimoDigito={borrarUltimoDigito} />
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          {
            !llamando
              ? <a
                href="llamar"
                className={`llamar${esNumeroCompleto ? " activo" : ""}`}
                onClick={llamar}
              >Llamar</a>
              : <a href="colgar" className="colgar activo" onClick={colgar}>Colgar</a>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
