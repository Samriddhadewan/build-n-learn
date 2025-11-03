const users = [
  { id: 101, name: "Arafat" },
  { id: 102, name: "Tania" },
  { id: 103, name: "Rahim" }
];

const posts = [
  { id: 1, userId: 101, title: "Learning JavaScript Basics" },
  { id: 2, userId: 101, title: "Understanding React Components" },
  { id: 3, userId: 102, title: "My Journey with Node.js" },
  { id: 4, userId: 103, title: "Exploring MongoDB for Beginners" },
  { id: 5, userId: 102, title: "How I Built My First Web App" },
  { id: 6, userId: 103, title: "Tips to Stay Motivated While Coding" }
];


const postByUserId = posts.reduce((table, post)=> {
    if(!table[post.userId]){
        table[post.userId] = []
    }
        table[post.userId].push(post)
    return table;
},{})


const userWithPost = users.map((user) => {
    return {...user, post: postByUserId[user.id] || [] }
})
console.log((userWithPost))