import React, { useState, useRef } from 'react';
import './bannerfuncionarios.css';

function BannerFuncionarios() {
  const [message, setMessage] = useState("FRETE-GRÁTIS A PARTIR DE R$200 EM COMPRAS");
  const [isEditing, setIsEditing] = useState(false);
  const editableRef = useRef(null);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const applyColor = (color) => {
    document.execCommand('foreColor', false, color);
  };

  return (
    <div>
      <div 
        className="banner" 
        onClick={handleTextClick} 
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        ref={editableRef}
        onBlur={handleInputBlur}
      >
        <div>{message}</div>
      </div>
      {isEditing && (
        <div className="color-picker">
          <input 
            type="color" 
            onChange={(e) => applyColor(e.target.value)} 
            title="Change text color" 
          />
        </div>
      )}
    </div>
  );
}

export default BannerFuncionarios;
