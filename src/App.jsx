import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pageinicial from "./pages/inicial";
import Pagelogin from "./pages/login";
import Pageprodutoscliente from "./pages/produtos";
import Pageprodutosfuncionario from "./pages/funcionarios";
import { CartProvider } from './CartContext';
import RegisterPage from './pages/cadastrar';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Pageinicial />} />
            <Route path="/login" element={<Pagelogin />} />
            <Route path="/produtos" element={<Pageprodutoscliente />} />
            <Route path="/funcionarios" element={<Pageprodutosfuncionario />} />
            <Route path="/cadastrar" element={<RegisterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
