import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { searchNews } from "../../utils/newsApi";
import {
  ARTICLES_STORAGE_KEY,
  KEYWORD_STORAGE_KEY,
  RESULTS_PER_PAGE,
  SAVED_ARTICLES_STORAGE_KEY,
  SEARCH_ERROR_MESSAGE,
} from "../../utils/constants";

function getStoredArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState("login");
  const [serverError, setServerError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState(() =>
    getStoredArray(ARTICLES_STORAGE_KEY),
  );
  const [savedArticles, setSavedArticles] = useState(() =>
    getStoredArray(SAVED_ARTICLES_STORAGE_KEY),
  );
  const [searchStatus, setSearchStatus] = useState(() =>
    getStoredArray(ARTICLES_STORAGE_KEY).length > 0 ? "success" : "idle",
  );
  const [searchError, setSearchError] = useState("");
  const [visibleCards, setVisibleCards] = useState(RESULTS_PER_PAGE);

  function handleLoginClick() {
    setPopupMode("login");
    setServerError("");
    setIsLoginPopupOpen(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setServerError("");
  }

  function handleSwitchPopupMode() {
    setServerError("");

    setPopupMode((currentMode) => {
      if (currentMode === "success") {
        return "login";
      }

      return currentMode === "login" ? "signup" : "login";
    });
  }

  function handlePopupSubmit(evt) {
    evt.preventDefault();

    if (popupMode === "login") {
      setIsLoggedIn(true);
      closeAllPopups();
      return;
    }

    if (popupMode === "signup") {
      setServerError("Este correo electrónico no está disponible");
    }
  }

  function prepareArticle(article) {
    return {
      source: article.source?.name || "Fuente desconocida",
      title: article.title || "Sin título",
      date: article.publishedAt,
      text: article.description || "Sin descripción disponible.",
      image: article.urlToImage || "",
      url: article.url,
      keyword: localStorage.getItem(KEYWORD_STORAGE_KEY) || "",
    };
  }

  function handleSearchSubmit(keyword) {
    setSearchStatus("loading");
    setSearchError("");
    setVisibleCards(RESULTS_PER_PAGE);
    localStorage.setItem(KEYWORD_STORAGE_KEY, keyword);

    searchNews(keyword)
      .then((newsArticles) => {
        const preparedArticles = newsArticles
          .filter((article) => article.title && article.url)
          .map(prepareArticle);

        setArticles(preparedArticles);
        localStorage.setItem(
          ARTICLES_STORAGE_KEY,
          JSON.stringify(preparedArticles),
        );
        setSearchStatus(preparedArticles.length > 0 ? "success" : "notFound");
      })
      .catch(() => {
        setArticles([]);
        setSearchError(SEARCH_ERROR_MESSAGE);
        setSearchStatus("error");
      });
  }

  function handleShowMoreClick() {
    setVisibleCards((currentCount) => currentCount + RESULTS_PER_PAGE);
  }

  function handleSaveArticle(article) {
    if (!isLoggedIn) return;

    const isSaved = savedArticles.some((item) => item.url === article.url);
    const nextSavedArticles = isSaved
      ? savedArticles.filter((item) => item.url !== article.url)
      : [...savedArticles, article];

    setSavedArticles(nextSavedArticles);
    localStorage.setItem(
      SAVED_ARTICLES_STORAGE_KEY,
      JSON.stringify(nextSavedArticles),
    );
  }

  useEffect(() => {
    if (!isLoginPopupOpen) return undefined;

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isLoginPopupOpen]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              articles={articles}
              savedArticles={savedArticles}
              searchStatus={searchStatus}
              searchError={searchError}
              visibleCards={visibleCards}
              onSearchSubmit={handleSearchSubmit}
              onShowMoreClick={handleShowMoreClick}
              onSaveArticle={handleSaveArticle}
              onLoginClick={handleLoginClick}
              onLogoutClick={handleLogoutClick}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              onSaveArticle={handleSaveArticle}
              onLoginClick={handleLoginClick}
              onLogoutClick={handleLogoutClick}
            />
          }
        />
      </Routes>

      <PopupWithForm
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        mode={popupMode}
        onSwitchMode={handleSwitchPopupMode}
        serverError={serverError}
        onSubmit={handlePopupSubmit}
      />
    </>
  );
}

export default App;
