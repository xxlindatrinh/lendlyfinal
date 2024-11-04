import '../css/Favoritter.css';

function Favoritter() {
    return (
        <div className="favoritter-container">
            <h1>Mine favoritter</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <img src="img/sækkevogn.webp" alt="Sækkevogn" className="image-placeholder" />
                    <p>Sækkevogn</p>
                    <p>30 kr</p>
                </div>
                <div className="grid-item">
                <img src="img/soundboks.webp" alt="Soundboks" className="image-placeholder" />
                <p>Soundboks</p>
                <p>300 kr</p>
                </div>
                <div className="grid-item">
                    <div className="image-container">
                        <img src="/img/lysterapi.webp" alt="Lysterapi lampe" className="image-placeholder" />
                        <div className="badge">1-2 mdr.</div>
                    </div>
                    <p>Lysterapi lampe</p>
                    <p>50 kr</p>
                </div>
                <div className="grid-item">
                    <img src="img/stole.webp" alt="4 stole" className="image-placeholder" />
                    <p>4 stole</p>
                    <p>30 kr</p>
                </div>
            </div>
        </div>
    );
}

export default Favoritter;
