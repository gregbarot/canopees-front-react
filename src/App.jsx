//import Outils
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import React
import React, { useLayoutEffect } from "react";

//import Composants
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

//import Pages
import Accueil from "./pages/Accueil";
import QuiSommesNous from "./pages/QuiSommesNous";
import Prestations from "./pages/Prestations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import CGU from "./pages/CGU";

//import Styles
import "./App.css";

//Pour le scroll to top à chaque changement de page.
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll en haut au changement de route
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <header>
            <Header />
          </header>

          <main className="container">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
              <Route path="/prestations" element={<Prestations />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgu" element={<CGU />} />
              <Route path="/cgv" element={<CGV />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
