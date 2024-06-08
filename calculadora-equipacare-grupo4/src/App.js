import UserForm from './componentsFront/UserForm';
import Navbar from './componentsFront/NavBar'; 
import Button from './componentsFront/Button'; 
import Footer from './componentsFront/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <UserForm/>
      <Button/>
      <Footer/>
     
    </div>
  );
}

export default App;