import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { CartContext } from '../CartContext';

function Header() {
  const navigate = useNavigate();
  const { openCart } = useContext(CartContext);

  const handleLogoClick = () => {
    navigate('/login');
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  const handleCartClick = () => {
    openCart();
  };

  return (
    <header>
      <div className="header-content">
        <div className="esquerda">
          <img src="src/assets/3024605.png" alt="perfil-logo" className="perfil-logo" onClick={handleLogoClick} />
        </div>
        <div className="meio">
          <h1 className="logo-text">
            <span className="logo-bio">Bio</span><span className="logo-nutri">Nutri</span>
          </h1>
        </div>
        <div className="direita">
          <p className="pagina-atual" onClick={() => handleNavClick('/')}>HOME</p>
          <p className="pagina-atual" onClick={() => handleNavClick('/produtos')}>PRODUTOS</p>
          <img src="src/assets/833314.png" alt="carrinho" className="carrinho" onClick={handleCartClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
