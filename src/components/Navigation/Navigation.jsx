import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.jpg";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Inicio
      </NavLink>

      {isLoggedIn && (
        <NavLink className="navigation__link" to="/saved-news">
          Artículos guardados
        </NavLink>
      )}

      {isLoggedIn ? (
        <button
          className="navigation__button navigation__button_type_logout"
          type="button"
          onClick={onLogoutClick}
        >
          Elise
          <img className="navigation__logout-icon" src={logoutIcon} alt="" />
        </button>
      ) : (
        <button
          className="navigation__button"
          type="button"
          onClick={onLoginClick}
        >
          Iniciar sesión
        </button>
      )}
    </nav>
  );
}

export default Navigation;
