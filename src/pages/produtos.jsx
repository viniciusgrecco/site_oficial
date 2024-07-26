import React, { useState } from 'react';
import Header from "../components/header";
import Propaganda from "../produtosdoclientepagina/components/propaganda";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import ProdutosCliente from "../produtosdoclientepagina/components/componenteproduto/produtodoscliente";
import Cart from '../produtosdoclientepagina/components/cart';

function Pageprodutoscliente() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <div>
      <Header />
      <Banner />
      <main>
        <Propaganda />
        <ProdutosCliente />
        <button onClick={handleCartOpen}>Ver Carrinho</button>
      </main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
    </div>
  );
}

export default Pageprodutoscliente;
