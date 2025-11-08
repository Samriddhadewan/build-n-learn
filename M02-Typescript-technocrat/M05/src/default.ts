const greestings = (person: string = "annonymous") => {
  return `hello ${person}`;
};

const res = greestings("samriddha");
const res2 = greestings();
console.log(res);
