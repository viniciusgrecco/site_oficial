import './header-login.css';

function HeaderLogin() {
  return (
    <header className="header-login">
      <div className="header-content">
        <img src="src/login/assets/home-icon.png" alt="Home" className="home-icon" />
        <div className="logo-text">
          <span className="logo-bio">Bio</span><span className="logo-nutri">Nutri</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
