import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";

// eslint-disable-next-line react/prop-types
const ProductPresenters = ({ products, categories, loading, error}) => {

    if(loading) return <p>Loading.....</p>
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
