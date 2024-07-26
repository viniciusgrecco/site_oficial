import React, { useState, useRef } from 'react';
import './funcionarios.css';

function Funcionarios3() {
  const [isEditing, setIsEditing] = useState(false);
  const [nomeProduto, setNomeProduto] = useState('POWER COFFE BAR');
  const [precoProduto, setPrecoProduto] = useState('R$ 45');
  const [quantidade, setQuantidade] = useState(2623);
  const [vendas, setVendas] = useState(1078);
  const [satisfacao, setSatisfacao] = useState(4.5);
  const [imageSrc1, setImageSrc1] = useState("src/funcionarios/assets/foto-capa - cópia.jpg");
  const [imageSrc2, setImageSrc2] = useState("src/funcionarios/assets/foto-informa - cópia.jpg");
  const imageInputRef1 = useRef(null);
  const imageInputRef2 = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleImageClick = (imageInputRef) => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e, setImageSrc) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="funcionarios-container2">
      <div className="produto-card2">
        <div className="imagem-container2" onClick={() => handleImageClick(imageInputRef1)}>
          <img src={imageSrc1} alt="Produto 1" className="imagem-produto2" />
          {isEditing && (
            <input
              type="file"
              ref={imageInputRef1}
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e, setImageSrc1)}
            />
          )}
        </div>
        <div className="info-container2">
          <p contentEditable={isEditing} suppressContentEditableWarning={true} className="produto-nome2">
            {nomeProduto}
          </p>
          <p contentEditable={isEditing} suppressContentEditableWarning={true} className="produto-preco2">
            {precoProduto}
          </p>
          <p>Quantidade em estoque</p>
          <p contentEditable={isEditing} suppressContentEditableWarning={true} className="info-highlight2">
            {quantidade}
          </p>
          <p>Vendas este mês</p>
          <p contentEditable={isEditing} suppressContentEditableWarning={true} className="info-highlight2">
            {vendas}
          </p>
          <p>Satisfação média</p>
          <p contentEditable={isEditing} suppressContentEditableWarning={true} className="info-highlight2">
            {satisfacao}
          </p>
          {isEditing ? (
            <button className="botao-editar2" onClick={handleSaveClick}>Salvar</button>
          ) : (
            <button className="botao-editar2" onClick={handleEditClick}>Editar</button>
          )}
        </div>
        <div className="imagem-container2" onClick={() => handleImageClick(imageInputRef2)}>
          <img src={imageSrc2} alt="Produto 2" className="imagem-produto2" />
          {isEditing && (
            <input
              type="file"
              ref={imageInputRef2}
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e, setImageSrc2)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Funcionarios3;
