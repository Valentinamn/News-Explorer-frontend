import "./SearchError.css";

function SearchError({ message }) {
  return (
    <section className="search-error">
      <p className="search-error__message">{message}</p>
    </section>
  );
}

export default SearchError;
