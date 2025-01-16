import './App.css'
import Contato from './containers/contato/Contato'
import Feedback from './containers/feedback/Feedback'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Plataformas from './containers/plataformas/Plataformas'
import Servicos from './containers/servicos/Servicos'
import Sobre from './containers/sobre/Sobre'

function App() {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Header/>
      <Servicos/>
      <Feedback/>
      <Plataformas/>
      <Sobre/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App