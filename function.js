"use strict";
// const flight = "LM235";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 2434555632,
// };
// const checkIn = function (flightNum, passenger) {
// flightNum = 'LM999';
// passenger.name ='Mr' + passenger.name;

// if(passenger.passport === 2434555632) {
//   alert("Check in")
// }
// else {
//   alert("Wrong passport")
// }
// };

// checkIn(flight, jonas)
// console.log(flight)
// console.log(jonas)

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// }


// const secureBooking = function() {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`)
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker)


// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 10
//   f = function() {
//     console.log(b * 10);
//   };
// };

// g();
// f();
// console.dir(f)

// // re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassenger = function (n, wait) {
//   const person = n/3
// setTimeout(function () {
//   console.log(`We are now boarding all ${n} passengers `);
//   console.log(`There are 3 groups, each with ${person} passengers`);
// }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // const person = 100
// boardPassenger(180, 5) 

// (function () {
//   const header = document.querySelector('.h');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function(){
//     header.style.color = 'blue'
//   });
// })();

(function (){
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(body).addEventListener('click', function(){
    header.style.color ='blue'
  })
})();