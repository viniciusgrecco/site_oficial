import React, { useContext } from 'react';
import { CartContext } from '../../../CartContext'
import './produtodocliente.css';

const produtos = [
  {
    id: 1,
    nome: 'POWER PROTEIN BAR',
    preco: 'R$ 90',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  {
    id: 2,
    nome: 'POWER COFFE BAR',
    preco: 'R$ 45',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  {
    id: 3,
    nome: 'POWER PROTEIN BAR',
    preco: 'R$ 10',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  {
    id: 4,
    nome: 'POWER PROTEIN BAR',
    preco: 'R$ 20',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  {
    id: 5,
    nome: 'POWER PROTEIN BAR',
    preco: 'R$ 90',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  {
    id: 6,
    nome: 'POWER PROTEIN BAR',
    preco: 'R$ 90',
    imagem1: 'src/produtosdoclientepagina/assets/foto-capa.jpg',
    imagem2: 'src/produtosdoclientepagina/assets/foto-informa.jpg'
  },
  // Adicione mais produtos conforme necessário
];

function ProdutosCliente() {
  const { addToCart, openCart } = useContext(CartContext);

  const handleAddToCart = (produto) => {
    addToCart({ ...produto, quantidade: 1, sabor: 'chocolate' });
    openCart();
  };

  return (
    <div className="produtos-container">
      {produtos.map(produto => (
        <div key={produto.id} className="produto-card">
          <div className="imagem-container">
            <img src={produto.imagem1} alt={produto.nome} className="imagem-produto" />
            <img src={produto.imagem2} alt={produto.nome} className="imagem-hover" />
          </div>
          <p className="nome-produto">{produto.nome}</p>
          <p className="preco-produto">{produto.preco}</p>
          <button className="botao-comprar" onClick={() => handleAddToCart(produto)}>COMPRAR</button>
        </div>
      ))}
    </div>
  );
}

export default ProdutosCliente;
