// arrays and objects
var obj = {
  name: "Aman",
  age: 20,
  isAdmin: true,
};

// console.log(obj.name);
// console.log(obj["name"]);
Object.freeze(obj);
obj.age = 23;
// console.log(obj.age);

// functions return
function abcd() {
  return 13;
}
// console.log(abcd());

// async js coding

