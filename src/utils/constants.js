export const NEWS_API_BASE_URL = "https://nomoreparties.co/news/v2";
export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || "";
export const NEWS_API_PAGE_SIZE = 100;
export const RESULTS_PER_PAGE = 3;
export const ARTICLES_STORAGE_KEY = "newsExplorerArticles";
export const KEYWORD_STORAGE_KEY = "newsExplorerKeyword";
export const SAVED_ARTICLES_STORAGE_KEY = "newsExplorerSavedArticles";
export const SEARCH_ERROR_MESSAGE =
  "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.";
