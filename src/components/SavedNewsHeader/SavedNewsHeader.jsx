import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Artículos guardados</p>

      <h1 className="saved-news-header__title">
        Elise, tienes 5 artículos guardados
      </h1>

      <p className="saved-news-header__keywords">
        Por palabras clave:{" "}
        <span className="saved-news-header__keywords-bold">
          Naturaleza, Yellowstone, y 2 más
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
