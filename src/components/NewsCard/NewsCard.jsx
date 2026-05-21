import bookmarkIcon from "../../images/Group 12.jpg";
import trashIcon from "../../images/trash.jpg";
import "./NewsCard.css";

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

function NewsCard({
  card,
  isLoggedIn,
  isSavedPage,
  isSaved,
  onSaveArticle,
}) {
  function handleSaveClick() {
    if (onSaveArticle) {
      onSaveArticle(card);
    }
  }

  return (
    <li className="news-card">
      <article className="news-card__article">
        <div className="news-card__image-wrapper">
          {card.image ? (
            <img className="news-card__image" src={card.image} alt={card.title} />
          ) : (
            <div
              className="news-card__image news-card__image_placeholder"
              aria-label={card.title}
            />
          )}

          {isSavedPage && (
            <span className="news-card__keyword">{card.keyword}</span>
          )}

          {isSavedPage && (
            <div className="news-card__tooltip news-card__tooltip_type_saved">
              Remove from saved
            </div>
          )}

          {!isSavedPage && !isLoggedIn && (
            <div className="news-card__tooltip">
              Inicia sesión para guardar artículos
            </div>
          )}

          <button
            className={`news-card__save-button ${
              isSaved ? "news-card__save-button_active" : ""
            }`}
            type="button"
            aria-label="Guardar artículo"
            onClick={handleSaveClick}
            disabled={!isLoggedIn && !isSavedPage}
          >
            <img
              className="news-card__save-icon"
              src={isSavedPage ? trashIcon : bookmarkIcon}
              alt=""
            />
          </button>
        </div>

        <div className="news-card__content">
          <p className="news-card__date">{formatDate(card.date)}</p>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__source">{card.source}</p>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
