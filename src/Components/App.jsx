import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "../css/App.css";
import Forside from "./Forside";
import Kategori from "./Kategori";
import Upload from "./Upload";
import Profil from "./Profil";
import BottomNav from "./BottomNav";
import Opretprofil from "./Opretprofil";
import Indbakke from "./Indbakke";
import Onboarding from "./Onboarding";
import Favoritter from "./Favoritter";
import Omprofil from "./Omprofil";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation(); // Get the current location

  // Specify the routes where BottomNav should NOT appear
  const noBottomNavRoutes = ["./Opretprofil"]; // Match exact route path

  // Check if the current path is NOT in the noBottomNavRoutes array
  const showBottomNav = !noBottomNavRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Opretprofil" element={<Opretprofil />} />
        <Route path="/Indbakke" element={<Indbakke />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Favoritter" element={<Favoritter />} />
        <Route path="/Omprofil" element={<Omprofil />} />
      </Routes>
      {showBottomNav && <BottomNav />} {/* Conditionally render BottomNav */}
    </>
  );
}

export default App;
