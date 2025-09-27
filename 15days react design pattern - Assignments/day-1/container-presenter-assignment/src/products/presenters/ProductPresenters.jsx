import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";

const ProductPresenters = ({ products, categories, loading, error }) => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <ProductList
          products={products}
          categories={categories}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default ProductPresenters;
