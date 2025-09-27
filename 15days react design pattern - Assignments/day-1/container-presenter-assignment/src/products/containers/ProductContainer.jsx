import useProduct from "../hooks/useProducts";
import ProductPresenters from "../presenters/ProductPresenters";

const ProductContainer = () => {
  const { products, categories, loading, error } = useProduct();
  return (
    <div>
      <ProductPresenters
        products={products}
        categories={categories}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ProductContainer;
