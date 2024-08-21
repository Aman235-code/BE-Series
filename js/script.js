// arrays and objects
var arr = [1, 2, 2, 3, 4];

// foreach, map, filter, find, indexOf
arr.forEach(function (val) {
  //   console.log(val + " hello");
});

var ans = arr.map(function (val) {
  return val * 3;
});
// console.log(ans);

var ans = arr.filter(function (val) {
  if (val >= 2) {
    return true;
  } else {
    return false;
  }
});
// console.log(ans);

var ans = arr.find(function (val) {
  if (val === 2) return val;
});

// console.log(ans);
