const USER_COUNT = 50000;

let userA = [];
let userB = [];


const createUser = (id) => ({id : `user_${id}`, name: `User ${id}`})

for(let i = 0; i < USER_COUNT; i++){
    userA.push(createUser(i));
    userB.push(createUser(i + 2500))
}

//* O(n)
const commonFriendsSlow = (userA, userB) => {
    const commonFriends = [];

    const startTime = performance.now()
    userA.forEach((userA)=> {
        userB.forEach((userB)=> {
            if(userA.id === userB.id){
                commonFriends.push(userA)
            }
        })
    })

    const endTime = performance.now();
    
    return {count : commonFriends.length, timeTookToFinish: endTime - startTime}
}

// console.log(commonFriendsSlow(userA, userB))\


const commonFriendsFast = (userA, userB)=> {

    const startTime = performance.now();
    const idListA = new Set(userA.map((item)=> item.id))
    const commonFriends = [];
    userB.forEach((userB)=> {
        //* O(1)
        if(idListA.has(userB.id)){
            commonFriends.push(userB)
        }
    })
    const endTime = performance.now();

    return {count : commonFriends.length, timeTookToFinish: endTime - startTime}
}

console.log(commonFriendsFast(userA, userB))

