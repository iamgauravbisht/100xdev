// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw new Error(err);

  const newData = data + " i have edited this file";

  console.log("entered readFile funciton", data);

  fs.writeFile("./a.txt", newData, (err) => {
    if (err) throw new Error(err);
  });
});
