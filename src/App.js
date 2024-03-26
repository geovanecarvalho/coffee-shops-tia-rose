import './App.css';
import Header from './components/header'
import Conteudo from './components/conteudo'
import Protutos from './components/produtos'
import Footer from './components/footer' 

function App() {
  return (
    <div>
       <Header></Header>
       <Conteudo></Conteudo>
       <Protutos></Protutos>
       <Footer></Footer>
    </div>
  );
}

export default App;
