import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <>
      <Header
        theme="light"
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
      />

      <main className="saved-news">
        <SavedNewsHeader />
        <NewsCardList isSavedPage isLoggedIn={isLoggedIn} />
      </main>

      <Footer />
    </>
  );
}

export default SavedNews;
