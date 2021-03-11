import PropTypes from "prop-types";

const Teclado = (props) => {

  const { llamando, anyadirDigito, borrarUltimoDigito } = props;

  return (
    <ol className="teclado">
      {
        [...[...Array(10)].map((x, i) => i).slice(1), 0].map(digito => (
          <li key={digito}>
            <button disabled={llamando} onClick={() => anyadirDigito(digito)}>{digito}</button>
          </li>
        ))
      }
      <li><button disabled={llamando} className="big" onClick={borrarUltimoDigito}>borrar</button></li>
    </ol>
  );
};

Teclado.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
  borrarUltimoDigito: PropTypes.func.isRequired
};

export default Teclado;
