import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ theme = "dark", isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <header className={`header header_theme_${theme}`}>
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation
          theme={theme}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
        />
      </div>
    </header>
  );
}

export default Header;
