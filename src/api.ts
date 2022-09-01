const BASE_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

export function fetchCoinHistory(coinId: string) {
  return fetch(`${BASE_URL}/${coinId}`).then((response) => response.json());
}
