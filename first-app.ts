interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
}

let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: 1234,
};

console.log(user);

// let hobbies: Array<string>;
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Reading"];
