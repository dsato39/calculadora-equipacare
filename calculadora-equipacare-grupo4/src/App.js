import UserForm from './componentsFront/UserForm';
import Navbar from './componentsFront/NavBar'; 
import Button from './componentsFront/Button'; 
import Footer from './componentsFront/Footer';
import ButtonCheckbox from './componentsFront/ButtonCheckbox';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <UserForm/>
      <ButtonCheckbox/>
      <Button/>
      <Footer/>
     
    </div>
  );
}

export default App;