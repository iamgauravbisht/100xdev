/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {
    // Busy-waiting
    // console.log("Busy-waiting over");
  }
}

// Example: Sleep for 2000 milliseconds (2 seconds)
console.log("Start");
sleep(2000);
console.log("End");
