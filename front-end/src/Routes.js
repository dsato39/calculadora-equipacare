import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioLead from "./pages/FormularioLead";
import FormularioDimensoes from "./pages/FormularioDimensoes";
import Dimensionamento from "./pages/Dimensionamento";
import ScrollToTop from "./components/ScrollToTop";
import CalculationLead from "./pages/CalculationLead";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FormularioLead />}></Route>
        <Route path="/formdimensoes" element={<FormularioDimensoes />}></Route>
        <Route path="/dimensionamento" element={<Dimensionamento />} />
        <Route path="/calculation" element={<CalculationLead />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
