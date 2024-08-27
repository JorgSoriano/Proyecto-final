import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Hora } from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import ContactoPage from "./pages/ContactoPage";
import PromocionesPage from "./pages/PromocionesPage";
function App() {
  return (
    <div className="App">
      <Hora />
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
