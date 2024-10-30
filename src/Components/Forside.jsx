import "../css/Forside.css";

function Forside() {
  return (
    <>

<div>
            <h1>Her skal der være searchbar</h1>
            <div>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Hus og have</span>
                    </span>
                </a>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Værktøj</span>
                    </span>
                </a>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Elektronik</span>
                    </span>
                </a>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Tøj</span>
                    </span>
                </a>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Hobby</span>
                    </span>
                </a>
                <a href="#" className="forside-kategori">
                    <span>
                        <span>Diverse</span>
                    </span>
                </a>

            </div>
        </div>

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
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Badminton ketcher</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Strikkepinde sæt</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>Sækkevogn</p>
          </div>
          <div className="grid-item">
            <div className="image-placeholder"></div>
            <p>4 stole</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forside;
