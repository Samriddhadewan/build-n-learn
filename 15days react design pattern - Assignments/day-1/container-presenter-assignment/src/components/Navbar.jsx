import { ShoppingCart } from "lucide-react"; // Cart icon

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Shop</h1>

      {/* Cart Icon */}
      <button className="relative">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {/* Cart count badge */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
