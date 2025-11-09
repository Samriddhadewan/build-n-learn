const friends  =["sumed", "pintu"];
const schoolFriends  =["pujan", "joyatu"];
const collageFriends  =["apurba", "joy"];

friends.push(...schoolFriends,...collageFriends)
console.log(friends)

// obj 

const user = {
    name: "Samriddha",
    phone: "0152984040",
}

const otherInfo = {
    hobby: "playing Guitar",
    nationality : "Bangladeshi"
}

const userInfo = {...user, ...otherInfo}
console.log(userInfo)

// Rest operator 
const sendInvite = (...friends: string[])=> {
    friends.forEach((friend)=> {
        console.log(`Invitation send for ${friend}`)
    })
}

sendInvite( "pintu","chintu","bulbul","chulbul" )
