import PropTypes from "prop-types";

const MensajeLlamando = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
  );
};



MensajeLlamando.propTypes = {
  llamando: PropTypes.bool.isRequired
};

export default MensajeLlamando;
