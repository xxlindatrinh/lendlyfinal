import "../css/Forside.css";

function Forside() {
  return (
    <>
      <div className="wrapper">
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
            <img src="img/sækkevogn.webp" alt="Sækkevogn" className="image-placeholder" />
            <p>Sækkevogn</p>
          </div>
          <div className="grid-item">
            <img src="/img/badminton.jpg" alt="Stige" className="image-placeholder" />
            <p>Stige</p>
          </div>
          <div className="grid-item">
            <img src="img/elektrisk-høvl.webp" alt="Plæneklipper" className="image-placeholder" />
            <p>Elektrisk høvl</p>
          </div>
          <div className="grid-item">
            <img src="path/to/boremaskine.jpg" alt="Boremaskine" className="image-placeholder" />
            <p>Boremaskine</p>
          </div>
          <div className="grid-item">
            <img src="path/to/badminton_ketcher.jpg" alt="Badminton ketcher" className="image-placeholder" />
            <p>Badminton ketcher</p>
          </div>
          <div className="grid-item">
            <img src="/img/lysterapi.webp" alt="Bog" className="image-placeholder" />
            <p>Lysterapi lampe</p>
          </div>
          <div className="grid-item">
            <img src="img/strikkepinde.webp" alt="Strikkepinde sæt" className="image-placeholder" />
            <p>Strikkepinde sæt</p>
          </div>
          <div className="grid-item">
            <img src="path/to/stole.jpg" alt="4 stole" className="image-placeholder" />
            <p>4 stole</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forside;
