import Navbar from "../components/NavBar/NavBar";
import Calculation from "../components/Calculation/Calculation";
import Banner from "../components/Banner/Banner";

function CalculationLead() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Calculation />
    </div>
  );
}

export default CalculationLead;