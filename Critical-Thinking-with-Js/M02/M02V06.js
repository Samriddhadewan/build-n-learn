const books = [
  { id: "b1", author: "George Orwell", title: "1984" },
  { id: "b2", author: "Harper Lee", title: "To Kill a Mockingbird" },
  { id: "b3", author: "J.K. Rowling", title: "Harry Potter and the Sorcerer’s Stone" },
  { id: "b4", author: "F. Scott Fitzgerald", title: "The Great Gatsby" },
  { id: "b5", author: "Jane Austen", title: "Pride and Prejudice" },
  { id: "b6", author: "Ernest Hemingway", title: "The Old Man and the Sea" },
  { id: "b7", author: "Mark Twain", title: "Adventures of Huckleberry Finn" },
  { id: "b8", author: "Leo Tolstoy", title: "War and Peace" },
  { id: "b9", author: "J.R.R. Tolkien", title: "The Lord of the Rings" },
  { id: "b10", author: "Mary Shelley", title: "Frankenstein" }
];


const lookupTable = books.reduce((table, data)=> {
    table[data.id] = data
    return table
}, {})


const findOne = lookupTable["b2"]

for(let book in lookupTable){
    // console.log(lookupTable[book])
}