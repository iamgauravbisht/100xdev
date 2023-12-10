// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout);

const counter = () => {
  let count = 0;
  for (count = 0; count < 10; count++) {
    setTimeout(() => {
      console.log("count : ", count);
    }, count * 1000);
  }

  //   while (count < 30) {
  //     setTimeout(() => {
  //       console.log(count);
  //       count++;
  //     }, count*1000);
  //   }
};
counter();
