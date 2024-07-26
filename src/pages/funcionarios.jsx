import Header from "../components/header";
import Footer from "../components/footer/footer";
import BannerFuncionarios from "../funcionarios/components/bannerfuncionarios";
import Propagandafuncionarios from "../funcionarios/components/propagandafuncionario";
import Funcionarios from "../funcionarios/components/funcionarios";
import Funcionarios3 from "../funcionarios/components/funcionarios3";


function Pageprodutosfuncionario() {
    return (
      
      <div>
        <Header />
        <BannerFuncionarios />
        <main>
           <Propagandafuncionarios />
           <Funcionarios />
           <Funcionarios3 />
           <Funcionarios />
        </main>
        <Footer />
      </div>
  
    );
  }
  
  export default Pageprodutosfuncionario;