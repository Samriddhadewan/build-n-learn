const student1 = {name: "samriddha", userId: 1, age:23};
const student2 = {name: "rikel", userId: 2, age:24};

const map = new Map();

map.set(student1, {location: "Rangamati"})
map.set(student2, {location: "Khagrachari"})

map.clear()
map.delete(student1)
console.log(map.has(student1))
console.log(map)

map.forEach((value, key)=> console.log("key:", key, "value:", value))

console.log(map.values())
console.log(map.keys())

console.log(map.entries())