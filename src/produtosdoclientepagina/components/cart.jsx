import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContext';
import './cart.css';

const Cart = () => {
  const { cartItems, updateCartItem, clearCart, removeCartItem, isCartOpen, closeCart } = useContext(CartContext);
  const [quantidades, setQuantidades] = useState(cartItems.map(item => item.quantidade));
  const [sabores, setSabores] = useState(cartItems.map(item => item.sabor));
  const [precoFinal, setPrecoFinal] = useState(0);
  const [frete, setFrete] = useState(0);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cupom, setCupom] = useState('');
  const [desconto, setDesconto] = useState(0);

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
      "13000": 20,
      "14000": 50,
      "15000": 80,
      "01000": 60,
      "20000": 100,
      "70000": 150,
      "80000": 40,
      "90000": 120
    };
    return distances[cepPrefix] || (20 + Math.floor(Math.random() * 100));
  };

  const handleQuantityChange = (index, value) => {
    value = Math.max(1, value);
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

  const handleCupomChange = (e) => {
    setCupom(e.target.value);
  };

  const handleAplicarCupom = () => {
    if (cupom === 'VG10') {
      setDesconto(0.10);
    } else if (cupom === 'VG15') {
      setDesconto(0.15);
    } else {
      setDesconto(0);
    }
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0) {
      alert('Adicione um item ao carrinho!');
      return;
    }
    const totalComDesconto = precoFinal * (1 - desconto) + frete;
    alert(`Compra finalizada! TOTAL: R$${totalComDesconto.toFixed(2)}`);
    clearCart();
    closeCart();
  };

  const handleRemoverItem = (id) => {
    removeCartItem(id);
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
                  min="1"
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
              <button className="btn-remover" onClick={() => handleRemoverItem(item.id)}>Remover</button>
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
        <div className="cupom-container">
          <label>
            Cupom de desconto:
            <input 
              type="text" 
              value={cupom} 
              onChange={handleCupomChange} 
              placeholder="Digite o cupom"
            />
          </label>
          <button className="btn-aplicar-cupom" onClick={handleAplicarCupom}>Aplicar Cupom</button>
        </div>
        <p className="frete-preco">FRETE: R$ {frete.toFixed(2)}</p>
        <p className="total-preco">TOTAL: R$ {(precoFinal * (1 - desconto) + frete).toFixed(2)}</p>
        <button className="btn-continue" onClick={closeCart}>Continuar Comprando</button>
        <button className="btn-finalizar" onClick={handleFinalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
