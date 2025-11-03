const rawApiData = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    rating: 4.5,
    price: 59.99,
    category: "Electronics",
    stock: 25,
  },
  {
    id: 2,
    name: "Gaming Mouse RGB",
    rating: 4.3,
    price: 29.99,
    category: "Electronics",
    stock: 48,
  },
  {
    id: 3,
    name: "Men's Casual Sneakers",
    rating: 4.1,
    price: 39.99,
    category: "Fashion",
    stock: 15,
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    rating: 4.8,
    price: 18.99,
    category: "Home & Kitchen",
    stock: 60,
  },
  {
    id: 5,
    name: "Smart LED Bulb",
    rating: 4.2,
    price: 12.99,
    category: "Home & Living",
    stock: 80,
  },
  {
    id: 6,
    name: "Yoga Mat Non-Slip",
    rating: 4.7,
    price: 25.0,
    category: "Sports & Fitness",
    stock: 32,
  },
  {
    id: 7,
    name: "Cotton T-Shirt",
    rating: 4.0,
    price: 14.99,
    category: "Fashion",
    stock: 100,
  },
  {
    id: 8,
    name: "Laptop Backpack",
    rating: 4.6,
    price: 45.5,
    category: "Accessories",
    stock: 28,
  },
  {
    id: 9,
    name: "Portable Charger 10000mAh",
    rating: 4.4,
    price: 29.5,
    category: "Electronics",
    stock: 42,
  },
  {
    id: 10,
    name: "Desk Lamp with USB Port",
    rating: 4.3,
    price: 22.75,
    category: "Home & Office",
    stock: 35,
  },
  {
    id: 11,
    name: "Noise Cancelling Earbuds",
    rating: 4.5,
    price: 64.99,
    category: "Electronics",
    stock: 18,
  },
  {
    id: 12,
    name: "Leather Wallet",
    rating: 4.1,
    price: 19.99,
    category: "Accessories",
    stock: 50,
  },
  {
    id: 13,
    name: "Electric Kettle 1.7L",
    rating: 4.6,
    price: 27.99,
    category: "Home & Kitchen",
    stock: 22,
  },
  {
    id: 14,
    name: "Running Shoes",
    rating: 4.3,
    price: 55.0,
    category: "Sports & Fitness",
    stock: 40,
  },
  {
    id: 15,
    name: "Ceramic Coffee Mug",
    rating: 4.9,
    price: 9.5,
    category: "Home & Kitchen",
    stock: 75,
  },
];

//Output => [{name: "phone"}, {name:"smart watch"}]
//* TODO process 
//* TODO filter => category 
//* TODO sort by rating  
//* TODO slice first three  
//* TODO Map => transform object shape

const topElectronicProducts = rawApiData.filter((item)=> item.category === "Electronics").sort((a,b)=> b.rating - a.rating).slice(0, 3).map((item) => ({name : item.name }));

console.log(topElectronicProducts)




