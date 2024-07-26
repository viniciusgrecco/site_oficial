import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContext';
import './cart.css';

const Cart = () => {
  const { cartItems, updateCartItem, clearCart, isCartOpen, closeCart } = useContext(CartContext);
  const [quantidades, setQuantidades] = useState(cartItems.map(item => item.quantidade));
  const [sabores, setSabores] = useState(cartItems.map(item => item.sabor));
  const [precoFinal, setPrecoFinal] = useState(0);
  const [frete, setFrete] = useState(0);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      return acc + preco * item.quantidade;
    }, 0);
    setPrecoFinal(total);
  }, [cartItems]);

  useEffect(() => {
    if (precoFinal >= 200) {
      setFrete(0);
    }
  }, [precoFinal]);

  const calculateDistanceFromIndaiatuba = (cepPrefix) => {
    const distances = {
      "13000": 20, // Campinas
      "14000": 50, // Ribeirão Preto
      "15000": 80, // São José do Rio Preto
      "01000": 60, // São Paulo
      "20000": 100, // Rio de Janeiro
      "70000": 150, // Brasília
      "80000": 40, // Curitiba
      "90000": 120 // Porto Alegre
    };
    return distances[cepPrefix] || (20 + Math.floor(Math.random() * 100));
  };

  const handleQuantityChange = (index, value) => {
    value = Math.max(1, value); // Garante que o valor seja pelo menos 1
    const newQuantidades = [...quantidades];
    newQuantidades[index] = value;
    setQuantidades(newQuantidades);
    updateCartItem(cartItems[index].id, { ...cartItems[index], quantidade: value });
  };

  const handleSaborChange = (index, value) => {
    const newSabores = [...sabores];
    newSabores[index] = value;
    setSabores(newSabores);
    updateCartItem(cartItems[index].id, { ...cartItems[index], sabor: value });
  };

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleBuscarEndereco = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setEndereco(data);

        const cepPrefix = cep.slice(0, 5);
        const distancia = calculateDistanceFromIndaiatuba(cepPrefix);
        const novoFrete = precoFinal >= 200 ? 0 : distancia * 0.5;
        setFrete(novoFrete);
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
        setEndereco(null);
        setFrete(0);
      }
    } else {
      setEndereco(null);
      setFrete(0);
    }
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0) {
      alert('Adicione um item ao carrinho!');
      return;
    }
    alert(`Compra finalizada! TOTAL: R$${(precoFinal + frete).toFixed(2)}`);
    clearCart();
    closeCart();
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Carrinho</h2>
        {cartItems.map((item, index) => (
          <div key={item.id} className="cart-item">
            <img src={item.imagem1} alt={item.nome} />
            <div>
              <p>{item.nome}</p>
              <p>{item.preco}</p>
              <label>
                Quantidade:
                <input 
                  type="number"
                  className='input-quantidade' 
                  value={quantidades[index]} 
                  min="1" // Define o valor mínimo como 1
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10) || 1)} 
                />
              </label>
              <label>
                Sabor:
                <select 
                  value={sabores[index]} 
                  onChange={(e) => handleSaborChange(index, e.target.value)}
                >
                  <option value="chocolate">Chocolate</option>
                  <option value="baunilha">Baunilha</option>
                  <option value="morango">Morango</option>
                </select>
              </label>
            </div>
          </div>
        ))}
        <div className="cep-container">
          <label>
            CEP:
            <input 
              type="text" 
              value={cep} 
              onChange={handleCepChange} 
              placeholder="Digite o CEP"
            />
          </label>
          <button className="btn-buscar" onClick={handleBuscarEndereco}>Buscar</button>
          {endereco && !endereco.erro && (
            <>
              <label>
                Número:
                <input 
                  type="text" 
                  value={numero} 
                  onChange={(e) => setNumero(e.target.value)} 
                  placeholder="Digite o número"
                />
              </label>
              <p>O produto será entregue na {endereco.logradouro}, {numero}, {endereco.bairro}, {endereco.localidade} - {endereco.uf}</p>
              <label>
                Complemento:
                <input 
                  type="text" 
                  value={complemento} 
                  onChange={(e) => setComplemento(e.target.value)} 
                  placeholder="Digite o complemento"
                />
              </label>
            </>
          )}
          {endereco && endereco.erro && (
            <p>CEP não encontrado. Por favor, verifique o CEP digitado.</p>
          )}
        </div>
        <p className="frete-preco">FRETE: R$ {frete.toFixed(2)}</p>
        <p className="total-preco">TOTAL: R$ {(precoFinal + frete).toFixed(2)}</p>
        <button className="btn-continue" onClick={closeCart}>Continuar Comprando</button>
        <button className="btn-finalizar" onClick={handleFinalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
