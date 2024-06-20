import LeadForm from "../components/FormularioLead/LeadForm";
import Navbar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Calculadora from "../components/Calculadora/calculadora";
import Beneficio from "../components/Beneficio/beneficio";

function FormularioLead() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Calculadora />
      <Beneficio />
      <LeadForm />
    </div>
  );
}

export default FormularioLead;
