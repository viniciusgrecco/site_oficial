import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-title">BioNutri</p>
        <div className="footer-info">
          <p className="footer-copyright">©2024 BioNutri</p>
        </div>
        <div className="footer-line"></div>
        <div className="footer-contacts">
          <p>
            <img src="src/assets/wpp-icon.png" alt="WhatsApp" className="footer-icon" /> (19)99138-0880
          </p>
          <p>
            <img src="src/assets/mail-icon.png" alt="Email" className="footer-icon" /> atendimento@bionutri.com
          </p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com">
            <img src="src/assets/face-icon.png" alt="Facebook" className="footer-social-icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="src/assets/link-icon.png" alt="LinkedIn" className="footer-social-icon" />
          </a>
          <a href="https://www.twitter.com">
            <img src="src/assets/twitter-icon.png" alt="Twitter" className="footer-social-icon" />
          </a>
          <a href="https://www.youtube.com">
            <img src="src/assets/youtube-icon.png" alt="YouTube" className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src="src/assets/insta-icon.png" alt="Instagram" className="footer-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
