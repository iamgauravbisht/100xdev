/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("waitOneSecond");
      resolve("1");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("waitTwoSecond");
      resolve("2");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("waitThreeSecond");
      resolve("3");
    }, 3000);
  });
}

async function calculateTime() {
  const start = new Date();
  // promise.all waits for all promises to resolve which means all the promisses are running at the same time / parallely
  const data = await Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]);
  console.log(data);
  const end = new Date();
  console.log(
    `start Time ${start.toLocaleTimeString()}\nend Time ${end.toLocaleTimeString()}\ntheir difference ${
      end - start
    }`
  );
}

calculateTime();
