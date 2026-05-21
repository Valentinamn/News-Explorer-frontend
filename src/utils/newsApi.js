import {
  NEWS_API_BASE_URL,
  NEWS_API_KEY,
  NEWS_API_PAGE_SIZE,
} from "./constants";

function getFormattedDate(date) {
  return date.toISOString().split("T")[0];
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Error: ${res.status}`));
}

export function searchNews(keyword) {
  if (!NEWS_API_KEY) {
    return Promise.reject(
      new Error("Falta la clave VITE_NEWS_API_KEY para News API."),
    );
  }

  const currentDate = new Date();
  const weekAgoDate = new Date();
  weekAgoDate.setDate(currentDate.getDate() - 7);

  const params = new URLSearchParams({
    q: keyword,
    apiKey: NEWS_API_KEY,
    from: getFormattedDate(weekAgoDate),
    to: getFormattedDate(currentDate),
    pageSize: NEWS_API_PAGE_SIZE.toString(),
  });

  return fetch(`${NEWS_API_BASE_URL}/everything?${params}`)
    .then(checkResponse)
    .then((data) => data.articles || [])
    .catch((err) => Promise.reject(err));
}
