const cart = [
  { id: 1, name: "Laptop", price: 75000, quantity: 1 },
  { id: 2, name: "Mouse", price: 1200, quantity: 2 },
  { id: 3, name: "Keyboard", price: 3500, quantity: 1 },
  { id: 4, name: "Monitor", price: 15000, quantity: 1 },
  { id: 5, name: "USB Cable", price: 500, quantity: 3 },
];

// task1 Find total price of all products 
// task2 Find total quantity of items 
// task3 create an object {totalPrice , totalQuantity} 


const totalPrice = cart.reduce((subtotal, item)=> {
    return subtotal + item.price * item.quantity;
},0)

const totalQuantity = cart.reduce((subQuantity, item)=> {
    return subQuantity + item.quantity
}, 0)

const summary = cart.reduce((acc, item)=> {
    acc.totalPrice = acc.totalPrice + (item.price * item.quantity);
    acc.totalQuantity = acc.totalQuantity + item.quantity   
    return acc;
}, {totalPrice: 0, totalQuantity: 0})



const students = [
  { id: 1, name: "Arafat", score: 85 },
  { id: 2, name: "Tania", score: 92 },
  { id: 3, name: "Rahim", score: 76 },
  { id: 4, name: "Jui", score: 88 },
  { id: 5, name: "Nayem", score: 95 },
];

// task1 find the total avg score
// task2 find the highest and the lowest
// task3 return the names of the students who scored above 80


const totalAvg = students.reduce((acc, student)=> {
    acc.total = acc.total + student.score; 
    acc.avg = acc.total / students.length
    return acc;

}, {total: 0, avg: 0})