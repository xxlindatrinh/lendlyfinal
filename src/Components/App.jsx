import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react"; 
import "../css/App.css";
import Forside from "./Forside";
import Kategori from "./Kategori";
import Upload from "./Upload";
import Profil from "./Profil";
import BottomNav from "./BottomNav";
import Opretprofil from "./OpretProfil";
import Indbakke from "./Indbakke";
import Onboarding from "./Onboarding";
import Favoritter from "./Favoritter";
import OmProfil from "./OmProfil";
import Loading from "./Loadingscreen";

function App() {
  // Set the basename to match your GitHub Pages repository name
  return (
    <BrowserRouter basename="/lendlyfinal">
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasLoaded, setHasLoaded] = useState(false); // Track if the loading screen has been shown

  // Show loading screen on first load
  useEffect(() => {
    if (!hasLoaded) {
      setHasLoaded(true); // Set to true so loading screen only shows once
      navigate("/Loadingscreen"); // Redirect to loading screen on first load
    }
  }, [hasLoaded, navigate]);

  // Routes where BottomNav should not be displayed
  const noBottomNavRoutes = ["/OpretProfil", "/Onboarding", "/Loadingscreen"];
  const showBottomNav = !noBottomNavRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/OpretProfil" element={<Opretprofil />} />
        <Route path="/Indbakke" element={<Indbakke />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Favoritter" element={<Favoritter />} />
        <Route path="/OmProfil" element={<OmProfil />} />
        <Route path="/Loadingscreen" element={<Loading />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </>
  );
}

export default App;

