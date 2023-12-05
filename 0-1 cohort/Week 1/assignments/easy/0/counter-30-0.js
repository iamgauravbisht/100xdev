//Create a counter in JavaScript(counts down from 30 to 0)

for (let start = 30; start >= 0; start--) {
  setTimeout(() => {
    console.log("start :", start);
  }, (30 - start) * 1000);
}
