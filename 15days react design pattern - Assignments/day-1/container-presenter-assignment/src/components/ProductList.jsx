import { motion } from "motion/react";
import { useState } from "react";

const ProductList = ({ products, categories, loading, error }) => {
  const [category, setCategory] = useState("");
  


//   filter products 
    const filterProducts = () => {
        if(category === ""){
            return products;
        }
        return products.filter((product)=> product.category === category)
    }

    const filteredProducts = filterProducts()
    console.log(filteredProducts)

  return (
    <div className="my-7">
      <div className="flex justify-center gap-4 sm:gap-8 relative">
        {categories.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={() => setCategory(item.name)}
              className={`text-gray-500 cursor-pointer border border-pink-600  px-4 rounded-full ${
                category === item.name && "text-white px-4 pt-0.5"
              }`}
            >
              {item.name}
              {category === item.name && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute bg-pink-400 h-7 left-0 right-0 top-0 rounded-full -z-1 "
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
