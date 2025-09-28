import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import CartPresenter from "./CartPresenter";

// eslint-disable-next-line react/prop-types
const ProductPresenters = ({ products, categories, loading, error,cartItems, addToCart, removeFromCart, clearCart, isOpen, toggleCart}) => {

    if(loading) return <p>Loading.....</p>
  return (
    <div>
      <div className="container mx-auto">
        <Navbar toggleCart={toggleCart} />
        <ProductList
          products={products}
          categories={categories}
          loading={loading}
          error={error}
          addToCart={addToCart}
        />
        <CartPresenter  
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        isOpen={isOpen}
        toggleCart={toggleCart}
        />
      </div>
    </div>
  );
};

export default ProductPresenters;
