const user = {
  id: 123,
  name: {
    firstName: "Shom",
    middleName: "kumar",
    lastName: "Dewan",
  },
  gender: "Male",
  favoriteColor: "black",
};

const {
  favoriteColor: myFavoriteColor,
  name: { middleName: myMiddleName, firstName, lastName },
  gender,
} = user;

console.log(firstName, myMiddleName, lastName);

const friends = ["pujan", "avishek", "joy"];

const [,myBestFriend,C] = friends;
console.log()
