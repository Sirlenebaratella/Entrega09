
import './App.css'
import ButtonEnviar from './components/ButtonEnviar'

function App() {
  return (
    <form>
      <label>
        Nome:
        <input type="text" placeholder="Digite o nome" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Digite o email" />
      </label>
      <label>
        Telefone:
        <input type="tel" placeholder="Digite o telefone" />
      </label>
      
      <p>
      <ButtonEnviar type="submit">Enviar</ButtonEnviar>
      </p>
    </form>
   
  );
}

export default App;