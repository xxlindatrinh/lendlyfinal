import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "../css/App.css";
import Forside from "./Forside";
import Kategori from "./Kategori";
import Upload from "./Upload";
import Profil from "./Profil";
import BottomNav from "./BottomNav";
import Opretprofil from "./Opretprofil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>

      <Opretprofil />
    </>
  );
}

function Main() {
  const location = useLocation(); // Get the current location

  // Specify the routes where BottomNav should NOT appear
  const noBottomNavRoutes = ["/OpretProfil"]; // BottomNav will not appear on this route

  const showBottomNav = !noBottomNavRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/OpretProfil" element={<OpretProfil />} />
      </Routes>
      {showBottomNav && <BottomNav />} {/* Conditionally render BottomNav */}
    </>
  );
}

export default App;
