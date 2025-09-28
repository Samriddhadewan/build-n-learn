const ProductCard = ({ product, addToCart }) => {
  // eslint-disable-next-line react/prop-types
  const { imageUrl, name, price, category, rating } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{category}</p>
        <p className="text-gray-900 font-semibold text-lg mt-2">${price}</p>
        <p className="text-yellow-500 mt-1">Rating: {rating} ★</p>
      </div>
      <div className="px-2 pb-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
