import './valores.css';

function Valores() {
  return (
    <div className="valores-container">
      <div className="valores-conteudo">
        <h2 className="valores-titulo">NOSSOS VALORES</h2>
        <div className="valores-items">
          <div className="valor-item">
            <img src="src/assets/qualidade-icon.png" alt="Qualidade" className="valor-imagem" />
            <h3 className="valor-subtitulo">QUALIDADE</h3>
            <p className="valor-texto">Garantimos produtos rigorosamente testados e aprovados, oferecendo sempre o melhor em nutrição e sabor.</p>
          </div>
          <div className="valor-item">
            <img src="src/assets/inovation-icon.png" alt="Inovação" className="valor-imagem" />
            <h3 className="valor-subtitulo">INOVAÇÃO</h3>
            <p className="valor-texto">Acompanhamos as tendências nutricionais, introduzindo produtos e tecnologias que atendem à necessidade dos consumidores.</p>
          </div>
          <div className="valor-item">
            <img src="src/assets/health-icon.png" alt="Saúde" className="valor-imagem" />
            <h3 className="valor-subtitulo">SAÚDE</h3>
            <p className="valor-texto">Nosso foco é promover saúde e bem-estar através de opções nutritivas e equilibradas para uma vida plena e ativa.</p>
          </div>
          <div className="valor-item">
            <img src="src/assets/sustentabilidade-icon.png" alt="Sustentabilidade" className="valor-imagem" />
            <h3 className="valor-subtitulo">SUSTENTABILIDADE</h3>
            <p className="valor-texto">Estamos comprometidos com o meio-ambiente, sempre valorizando a sustentabilidade e promovendo um futuro mais verde e saudável.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valores;
