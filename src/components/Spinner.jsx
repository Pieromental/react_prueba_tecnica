import "./Spinner.css";

const Spinner = ({ message="Cargando" }) => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
      <h3>{message}</h3>
    </div>
  );
};

export default Spinner;
