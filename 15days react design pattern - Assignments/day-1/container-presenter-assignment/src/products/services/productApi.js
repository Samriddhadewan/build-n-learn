import axios from "axios";

const product_URL = `${import.meta.env.VITE_API_BASE_URL}/api/products`;
export async function fetchProducts() {
  try {
    const res = await axios.get(product_URL);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
