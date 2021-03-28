import './App.css'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Footer from './componentes/Footer/Footer'
// import Contato from './components/Contato/Contato'
import {BrowserRouter as Router} from "react-router-dom";
import BuscarDrinks from './componentes/API/BuscarDrinks';

function App() {
  return ( 
    <div className= "App">
      <Router>
        <Header />
        {/* <Home /> */}
        <BuscarDrinks className="content" />
        <Footer />
        </Router>
    </div>

  );
}

export default App;
