// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats -
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const meridian = hour >= 12 ? "PM" : "AM";

  console.log(hour + ":" + minute + ":" + seconds + " " + meridian);

  console.log(date.toLocaleTimeString());
}, 1000);
