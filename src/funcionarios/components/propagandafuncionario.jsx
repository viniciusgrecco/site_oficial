import React, { useState, useRef } from 'react';
import './propagandafuncionario.css';

function Propagandafuncionarios() {
  const [leftText, setLeftText] = useState("CONHEÇA NOSSOS PRODUTOS");
  const [rightText, setRightText] = useState("FRETE GRÁTIS PARA TODO O BRASIL");
  const [subText, setSubText] = useState("para pedidos a partir de R$200");
  const [imageSrc, setImageSrc] = useState("src/funcionarios/assets/propaganda - cópia.jpg");
  const imageInputRef = useRef(null);

  const handleTextChange = (e, setText) => {
    setText(e.target.innerText);
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="propaganda-container">
      <div className="text-left">
        <p
          className="main-text"
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => handleTextChange(e, setLeftText)}
        >
          {leftText}
        </p>
      </div>
      <div className="propaganda-image-container" onClick={handleImageClick}>
        <img src={imageSrc} alt="Produtos" className="propaganda-image" />
        <input
          type="file"
          ref={imageInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
      <div className="text-right">
        <p
          className="main-text"
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => handleTextChange(e, setRightText)}
        >
          {rightText}
        </p>
        <p
          className="sub-text"
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => handleTextChange(e, setSubText)}
        >
          {subText}
        </p>
      </div>
    </div>
  );
}

export default Propagandafuncionarios;
