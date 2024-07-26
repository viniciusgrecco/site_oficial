import React from 'react';
import './propaganda.css';

function Propaganda() {
  return (
    <div className="propaganda-container">
      <div className="text-left">
        <p className="main-text">CONHEÇA NOSSOS PRODUTOS</p>
      </div>
      <img src="src/produtosdoclientepagina/assets/propaganda.jpg" alt="Produtos" className="propaganda-image" />
      <div className="text-right">
        <p className="main-text">FRETE GRÁTIS PARA TODO O BRASIL</p>
        <p className="sub-text">para pedidos a partir de R$200</p>
      </div>
    </div>
  );
}

export default Propaganda;
