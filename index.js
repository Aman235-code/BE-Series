const fs = require("fs");
const http = require("http");

// writefile
// fs.writeFile("hey.txt", "Hey, Hello World", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// copyfile;
// fs.copyFile("hello.txt", "./copy2/copy.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// rename;
// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// appendfile;
// fs.appendFile("hey.txt", " I'm Fine", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// unlink;
// fs.unlink("hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("removed");
// });

// remove directory
// fs.rm("./copy", { recursive: true }, function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

const server = http.createServer(function (req, res) {
  res.end("Hello World");
});
server.listen(3000);
