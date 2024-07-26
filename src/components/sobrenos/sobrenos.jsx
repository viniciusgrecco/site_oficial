import './sobrenos.css';

function SobreNos() {
  return (
    <div className="sobrenos-container">
      <p className="sobrenos-texto">SOBRE NÓS</p>
      <div className="sobrenos-container-branco">
        <div className="foco">
          <div className="foco-texto">
            <p>Nosso foco é promover saúde e bem-estar através de alimentos nutritivos de alta qualidade</p>
          </div>
          <div className="foco-imagem">
            <img src="src/assets/sobrenos1.jpg" alt="sobrenos 1" className="imagem1"/>
          </div>
        </div>
        <div className="historia">
          <div className="historia-imagem">
            <img src="src/assets/imagem2.jpg" alt="historia" className="imagem2"/>
          </div>
          <div className="historia-texto">
            <h3>HISTÓRIA</h3>
            <p>Com mais de 10 anos de experiência, a BioNutri é referência em alimentos nutritivos de alta qualidade. Nossa fábrica em Indaiatuba atende clientes no Brasil e no exterior, sempre comprometida em promover saúde e bem-estar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
