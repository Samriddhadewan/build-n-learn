const salesData = [
  { category: "Electronics", item: "Laptop", price: 900, quantity: 3 },
  { category: "Electronics", item: "Headphones", price: 60, quantity: 10 },
  { category: "Electronics", item: "Smartphone", price: 700, quantity: 5 },
  { category: "Clothing", item: "T-Shirt", price: 25, quantity: 20 },
  { category: "Clothing", item: "Jeans", price: 45, quantity: 12 },
  { category: "Clothing", item: "Jacket", price: 80, quantity: 6 },
  { category: "Groceries", item: "Rice", price: 10, quantity: 40 },
  { category: "Groceries", item: "Milk", price: 5, quantity: 30 },
  { category: "Groceries", item: "Eggs", price: 3, quantity: 50 },
  { category: "Furniture", item: "Chair", price: 55, quantity: 8 },
];

const aggregateOne = salesData.reduce((table, sale) => {
  if (table[sale.category]) {
    table[sale.category].totalRevenue +=  sale.price * sale.quantity;
    table[sale.category].itemCount += sale.quantity
  } else {
    table[sale.category] = { totalRevenue: sale.price * sale.quantity, itemCount : sale.quantity };
  }

  return table;
}, {});

// another way 
const aggregateTwo = salesData.reduce((table, sale)=> {
    const {category, price, quantity} = sale;
    if(!table[category]){
        table[category] = {
            totalRevenue : 0,
            itemCount : 0
        }
    }

    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity 
    return table
}, {})


console.log(aggregateTwo)
console.log(aggregateOne)