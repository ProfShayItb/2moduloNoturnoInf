
import Propriedade from "./components/Propriedade"
import Fragmento from "./components/Fragmento"
import NumeroAleatorio from './components/NumeroAleatorio'
import Modelo from "./components/cartao/Modelo"




function App() {


  return (
    <>
      <Modelo titulo="Número aleatório" cor="blue">
        <NumeroAleatorio min={1} max={10} />
      </Modelo>
      <Modelo titulo="Fragmento" cor="yellow">
        <Fragmento></Fragmento>
      </Modelo>


      <Propriedade titulo="04/04/2024" subtitulo="Hoje é quinta-feira" />

      <Propriedade titulo="05/04" subtitulo="Sexta-feira" />
    </>
  )
}

export default App