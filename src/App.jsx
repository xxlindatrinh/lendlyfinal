import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Onboarding from './Onboarding';

 function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Onboarding />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;


