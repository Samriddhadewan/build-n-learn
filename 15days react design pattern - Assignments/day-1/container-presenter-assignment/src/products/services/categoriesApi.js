import axios from "axios";

const categories_URL = `${import.meta.env.VITE_API_BASE_URL}/api/categories`;
export async function fetchCategories() {
  try {
    const res = await axios.get(categories_URL);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
