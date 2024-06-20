import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioLead from "./pages/FormularioLead";
import FormularioDimensoes from "./pages/FormularioDimensoes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioLead />}></Route>
        <Route path="/formdimensoes" element={<FormularioDimensoes />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
