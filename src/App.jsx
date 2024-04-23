
import Propriedade from "./components/Propriedade"
import Fragmento from "./components/Fragmento"
import NumeroAleatorio from './components/NumeroAleatorio'
import Modelo from "./components/cartao/Modelo"
import SobreMim from "./components/SobreMim"
import ListaAluno from "./components/repeticao/ListaAluno"
import './App.css'

function App() {


  return (
    <main className="cards">

      <Modelo titulo="Lista usando Map" cor="purple">
        <ListaAluno/>
      </Modelo>
     
     <Modelo titulo="Sobre Mim" cor="orange">
       <SobreMim/>
     </Modelo>

      <Modelo titulo="Número aleatório" cor="blue">
        <NumeroAleatorio min={1} max={10} />
      </Modelo>
      <Modelo titulo="Número aleatório" cor="blue">
        <NumeroAleatorio min={10} max={100} />
      </Modelo>
      <Modelo titulo="Fragmento" cor="yellow">
        <Fragmento></Fragmento>
      </Modelo>


      <Modelo titulo="Propriedade" cor="pink">
        <Propriedade titulo="04/04/2024" subtitulo="Hoje é quinta-feira" />
        <Propriedade titulo="05/04" subtitulo="Sexta-feira" />
      </Modelo>
    </main>
  )
}

export default App
