import PropTypes from "prop-types";

const NumeroTelefono = (props) => {
  const { numero } = props;
  return (
    <span className="numero">{numero}</span>
  );
};

NumeroTelefono.propTypes = {
  numero: PropTypes.string.isRequired
};

export default NumeroTelefono;
