import './App.css'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Footer from './componentes/Footer/Footer'
import Contato from './componentes/Contato/Contato'
import Sobre from "./componentes/Sobre/Sobre"
import Time from "./componentes/Time/Time"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BuscarDrinks from './componentes/API/BuscarDrinks';

function App() {
  return ( 
    <div className= "App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/drinks">
            <BuscarDrinks />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/time">
            <Time />
          </Route>
        {/* <BuscarDrinks className="content" /> */}
        </Switch>
        <Footer />
        </Router>
    </div>

  );
}

export default App;
