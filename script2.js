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
// the code which is sync by nature -> send them to main stack and run
// if you get code which is async -> send them to side stack and process
// after sync code ran in main stack -> bring the async code from side stack to main stack and then run that code

async function abcd() {
  var blob = await fetch("https://randomuser.me/api");
  var ans = await blob.json();
  console.log(ans.results[0].name);
}
abcd();
