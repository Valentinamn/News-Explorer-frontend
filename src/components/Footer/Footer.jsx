import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>

      <nav className="footer__navigation">
        <a className="footer__link" href="/">
          Inicio
        </a>
        <a
          className="footer__link"
          href="https://practicum.com"
          target="_blank"
          rel="noreferrer"
        >
          Practicum
        </a>
        <a
          className="footer__icon"
          href="https://github.com/Valentinamn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="footer__icon"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
