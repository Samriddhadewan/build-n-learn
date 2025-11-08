//object and array 
let barazList : string[] = ["eggs", "milk", "suger"];

barazList.push("chini")

let mixedBjr : (string | number)[] = ["eggs", 21, "sugar",12,"milk"]
 
mixedBjr.push(32)

let coordinates : [number, number] = [22, 12];
let couple : [string, string] = ["Husband", "wife"]

let nameAndRoll: [string, number] =["samriddha", 12]

// Reference type : object 

// const user : {
//     organization: "Programming Hero",//Value => Type
//     firstName : string;
//     middleName?: string;
//     lastName : string;
//     isMarried: boolean;
// } = {
//     organization: "Programming Hero",
//     firstName : "jhankar",
//     lastName : "mahabub",
//     isMarried: true
// }

// user.organization

const user : {
    readonly organization: string,//Value => Type
    firstName : string;
    middleName?: string;
    lastName : string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName : "jhankar",
    lastName : "mahabub",
    isMarried: true
}

user.organization = 'sfsh'

console.log(user)