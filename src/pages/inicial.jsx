import Header from "../components/header";
import Banner from "../components/banner/banner"
import MyCarousel from "../components/carrossel/carrossel";
import SobreNos from "../components/sobrenos/sobrenos";
import Missao from "../components/missao/missao";
import Valores from "../components/valores/valores";
import Footer from "../components/footer/footer";
import Cart from "../produtosdoclientepagina/components/cart";
import { CartContext } from "../CartContext";
import { useContext } from "react";


function Pageinicial() {
  const { isCartOpen, closeCart} = useContext(CartContext);

    return (
      
      <div>
        <Header/>
        <Banner />
        <main>
          <MyCarousel />
          <SobreNos />
          <Missao />
          <Valores />
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} on close={closeCart} />
    
      </div>
  
    );
  }
  
  export default Pageinicial;