import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css'
import Forside from './Forside';
import Kategori from './Kategori';
import Profil from './Profil';
import OpretProfil from './OpretProfil';

 function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Forside />} />
                <Route path='/Kategori' element={<Kategori />} />
                <Route path='/Profil' element={<Profil />} />
                <Route path='/OpretProfil' element={<OpretProfil />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;


