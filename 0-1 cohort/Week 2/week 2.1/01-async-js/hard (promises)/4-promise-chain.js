/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  // these promises are running one after the other / sequentially
  const one = await waitOneSecond();
  const two = await waitTwoSecond();
  const three = await waitThreeSecond();

  console.log(`one : ${one} , Two : ${two},three : ${three}`);

  const end = new Date();
  console.log(
    `start Time ${start.toLocaleTimeString()}\nend Time ${end.toLocaleTimeString()}\ntheir difference ${
      end - start
    }`
  );
}

calculateTime();
