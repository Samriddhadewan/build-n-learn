// eslint-disable-next-line react/prop-types
const CartPresenter = ({ cartItems, removeFromCart, clearCart, isOpen, toggleCart }) => {
  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={toggleCart}
          className="bg-gray-400"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={toggleCart}
            aria-label="Close Cart"
            className="text-gray-600 hover:text-black text-xl"
          >
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-3 border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove ${item.name}`}
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPresenter;
