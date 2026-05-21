import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearchSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleKeywordChange(evt) {
    setKeyword(evt.target.value);
    setError("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setError("Por favor, introduzca una palabra clave");
      return;
    }

    onSearchSubmit(trimmedKeyword);
  }

  return (
    <section className="search">
      <h1 className="search__title">¿Qué está pasando en el mundo?</h1>
      <p className="search__subtitle">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>

      <div className="search__form-container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <input
            className="search__input"
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Introduce un tema"
            required
          />
          <button className="search__button" type="submit">
            Buscar
          </button>
        </form>
        {error && <span className="search__error">{error}</span>}
      </div>
    </section>
  );
}

export default SearchForm;
