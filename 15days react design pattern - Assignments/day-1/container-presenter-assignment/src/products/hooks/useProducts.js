import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productApi";
import { fetchCategories } from "../services/categoriesApi";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching products
  const load = async () => {
    try {
      const [productData, categoryData] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);

      setProducts(productData);
      setCategories(categoryData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    products,
    categories,
    loading,
    error,
    load,
  };
}
