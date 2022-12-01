import axios from "axios";

export const API_KEY = "AIzaSyDuFjrxOBmmaK8lK0IKsefvaD03erc3ErY";

export const BASE_URL = "https://www.googleapis.com/books";

export const api = axios.create({
  baseURL: BASE_URL + "/v1",
  params: {
    key: API_KEY,
  },
});
