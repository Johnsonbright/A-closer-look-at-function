"use strict "
const flight = "LM235";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 2434555632,
};
const checkIn = function (flightNum, passenger) {
flightNum = 'LM999';
passenger.name ='Mr' + passenger.name;

if(passenger.passport === 2434555632) {
  alert("Check in")
}
else {
  alert("Wrong passport")
}
};

checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}
n