import "../css/Forside.css";

function Forside() {
  return (
    <>
      <div className="forside-container">
        <h1>I nærheden af dig</h1>
        <div className="grid-container">
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Bog</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Stige</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Plæneklipper</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Boremaskine</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forside;
