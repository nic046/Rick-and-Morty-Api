import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner-container">
        <div className="spinner spinner1"></div>
        <div className="spinner spinner2"></div>
        <div className="spinner spinner3"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
