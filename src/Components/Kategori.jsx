import '../css/Kategori.css';

function Kategori() {
    return (
        <>
        <div>
            
        </div>    

            <div className='mine-kategorier'>
                <div className="kategori-item">
                    <img src="/ikoner/hjerte_ikon.svg" alt="Gemte varer icon" />
                    <span>Mine gemte varer</span>
                </div>
                <div className="kategori-item">
                    <img src="/ikoner/gruppe_ikon.svg" alt="Grupper icon" />
                    <span>Mine grupper</span>
                </div>
            </div>

            <div className='populaer'>
                <h2>Populære kategorier</h2>
                <div className="kategori-item">
                    <img src="/ikoner/værktøj_ikon.svg" alt="Værktøj icon" />
                    <span>Værktøj</span>
                </div>
                <div className="kategori-item">
                    <img src="/ikoner/husoghave_ikon.svg" alt="Hus og have icon" />
                    <span>Hus og have</span>
                </div>
                <div className="kategori-item">
                    <img src="/ikoner/maleikon.svg" alt="Kreative værktøjer icon" />
                    <span>Kreative værktøjer</span>
                </div>
            </div>

            <div className='alle-kategorier'>
                <h2>Alle kategorier</h2>
                <div className="kategori-item">
                    <img src="/ikoner/tøjikon.svg" alt="Beklædning icon" />
                    <span>Beklædning</span>
                </div>
                <div className="kategori-item">
                    <img src="/ikoner/læseikon.svg" alt="Bøger icon" />
                    <span>Bøger</span>
                </div>
            </div>
        </>
    );
}

export default Kategori;
