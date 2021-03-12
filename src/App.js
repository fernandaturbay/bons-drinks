import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <h1>Contato</h1>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome"></input><br></br>
          <label for="email">Email:</label>
          <input type="text" id="email"></input><br></br>
          <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" style= {{width:"250px", height:"100px"}}></textarea><br></br>
          <input type="submit" value="Enviar"></input>
        </form> */}
    </div>
  );
}

export default App;
