import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContext'; // Certifique-se de que o caminho está correto
import './cart.css';

const Cart = () => {
  const { cartItems, updateCartItem, clearCart, isCartOpen, closeCart } = useContext(CartContext);
  const [quantidades, setQuantidades] = useState(cartItems.map(item => item.quantidade));
  const [sabores, setSabores] = useState(cartItems.map(item => item.sabor));
  const [precoFinal, setPrecoFinal] = useState(0);
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

  const handleQuantityChange = (index, value) => {
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
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
        setEndereco(null);
      }
    } else {
      setEndereco(null);
    }
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0) {
      alert('Adicione um item ao carrinho!');
      return;
    }
    alert(`Compra finalizada! TOTAL: R$${precoFinal.toFixed(2)}`);
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
                  onChange={(e) => handleQuantityChange(index, e.target.value)} 
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
        <button className="btn-continue" onClick={closeCart}>Continuar Comprando</button>
        <button className="btn-finalizar" onClick={handleFinalizarCompra}>Finalizar Compra</button>
        <p className="total-preco">TOTAL: R$ {precoFinal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
