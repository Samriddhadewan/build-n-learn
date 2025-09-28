import useCart from "../hooks/useCart";
import useProduct from "../hooks/useProducts";
import ProductPresenters from "../presenters/ProductPresenters";

const ProductContainer = () => {
  const { products, categories, loading, error } = useProduct();
  const cart = useCart();
  return (
    <div>
      <ProductPresenters
        products={products}
        categories={categories}
        loading={loading}
        error={error}
        {...cart}

      />
    </div>
  );
};

export default ProductContainer;
