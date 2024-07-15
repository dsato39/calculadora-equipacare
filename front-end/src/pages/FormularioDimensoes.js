import React from "react";
import Navbar from "../components/NavBar/NavBar";
import DimensionsForm from "../components/FormularioDimensoes/DimensionsForm";
import BannerVert from "../components/BannerVert/BannerVert";
import "./FormularioDimensoes.css";

function FormularioDimensoes() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <BannerVert />
        <DimensionsForm />
      </div>
    </div>
  );
}

export default FormularioDimensoes;
