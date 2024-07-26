import React from 'react';
import { useNavigate } from 'react-router-dom';
import './loginfuncionario.css';

function EmployeeLogin() {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/funcionarios');
  };

  const handleClientClick = () => {
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="src/login/assets/imagemboa.jpg" alt="Background" className="background-image" />
      </div>
      <div className="form-section">
        <h2>Log-in</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <div className="login-links">
          <a href="#" onClick={handleClientClick}>Sou Cliente</a>
        </div>
        <div className="button-group">
          <button type="button" className="btn" onClick={handleConfirmClick}>CONFIRMAR</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLogin;
