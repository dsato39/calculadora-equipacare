import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioLead from "./pages/FormularioLead";
import FormularioDimensoes from "./pages/FormularioDimensoes";
import Dimensionamento from "./pages/Dimensionamento";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioLead />}></Route>
        <Route path="/formdimensoes" element={<FormularioDimensoes />}></Route>
        <Route path="/dimensionamento" element={<Dimensionamento />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
