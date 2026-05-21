import NewsCard from "../NewsCard/NewsCard";
import image08 from "../../images/image_08.jpg";
import image04 from "../../images/image_04.jpg";
import image07 from "../../images/image_07.jpg";
import image06 from "../../images/image_06.jpg";
import image01 from "../../images/image_01.jpg";
import "./NewsCardList.css";

const savedCards = [
  {
    title: "Todo el mundo necesita un lugar de reflexión en la naturaleza",
    text: 'Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...',
    source: "Treehugger",
    date: "2020-11-04T00:00:00Z",
    image: image08,
    keyword: "Naturaleza",
    url: "saved-1",
  },
  {
    title: "La naturaleza te hace mejor",
    text: "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
    source: "National Geographic",
    date: "2019-02-19T00:00:00Z",
    image: image04,
    keyword: "Naturaleza",
    url: "saved-2",
  },
  {
    title:
      "Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos",
    text: "Uri Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su...",
    source: "National Geographic",
    date: "2020-10-19T00:00:00Z",
    image: image06,
    keyword: "Yellowstone",
    url: "saved-3",
  },
  {
    title: "El Grand Teton renueva el histórico Camino de la Cresta",
    text: "La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...",
    source: "National Parks Traveler",
    date: "2020-11-04T00:00:00Z",
    image: image07,
    keyword: "Parques",
    url: "saved-4",
  },
  {
    title: "Los científicos no saben por qué la estrella polar es tan extraña",
    text: "Los seres humanos se han basado durante mucho tiempo en el cielo estrellado para adentrarse hacia nuevas fronteras, navegar hasta el fin del mundo y encontrar el camino de vuelta...",
    source: "Treehugger",
    date: "2020-03-16T00:00:00Z",
    image: image01,
    keyword: "Fotografía",
    url: "saved-5",
  },
];

function NewsCardList({
  cards = [],
  savedArticles = [],
  visibleCards = 3,
  isLoggedIn,
  isSavedPage = false,
  onShowMoreClick,
  onSaveArticle,
}) {
  const currentCards = isSavedPage ? savedCards : cards;
  const shownCards = isSavedPage
    ? currentCards
    : currentCards.slice(0, visibleCards);
  const shouldShowMoreButton = !isSavedPage && visibleCards < currentCards.length;

  return (
    <section className={`news-card-list ${isSavedPage ? "news-card-list_saved" : ""}`}>
      {!isSavedPage && (
        <h2 className="news-card-list__title">Resultados de la búsqueda</h2>
      )}

      <ul className="news-card-list__items">
        {shownCards.map((card) => (
          <NewsCard
            key={card.url || card.title}
            card={card}
            isLoggedIn={isLoggedIn}
            isSavedPage={isSavedPage}
            isSaved={savedArticles.some((item) => item.url === card.url)}
            onSaveArticle={onSaveArticle}
          />
        ))}
      </ul>

      {shouldShowMoreButton && (
        <button
          className="news-card-list__button"
          type="button"
          onClick={onShowMoreClick}
        >
          Ver más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
