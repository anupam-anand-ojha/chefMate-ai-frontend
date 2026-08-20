import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const generateRecipes = async (data) => {
  const response = await API.post("/recipe/generate", data);

  return response.data;
};