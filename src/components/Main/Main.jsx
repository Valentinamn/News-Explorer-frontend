import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SearchError from "../SearchError/SearchError";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main({
  isLoggedIn,
  articles,
  savedArticles,
  searchStatus,
  searchError,
  visibleCards,
  onSearchSubmit,
  onShowMoreClick,
  onSaveArticle,
  onLoginClick,
  onLogoutClick,
}) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
      />

      <main className="main">
        <SearchForm onSearchSubmit={onSearchSubmit} />

        {searchStatus === "loading" && <Preloader />}
        {searchStatus === "notFound" && <NothingFound />}
        {searchStatus === "error" && <SearchError message={searchError} />}
        {searchStatus === "success" && (
          <NewsCardList
            cards={articles}
            savedArticles={savedArticles}
            visibleCards={visibleCards}
            isLoggedIn={isLoggedIn}
            onShowMoreClick={onShowMoreClick}
            onSaveArticle={onSaveArticle}
          />
        )}

        <About />
      </main>

      <Footer />
    </>
  );
}

export default Main;
