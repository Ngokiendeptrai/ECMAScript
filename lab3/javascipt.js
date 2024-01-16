let multiply = (num1, num2) => num1 * num2;


let toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);


let padZeros = (num, totalLen = 2) => num.toString().padStart(totalLen, "0");


let power = (base, exponent) => base ** exponent;

let greet = (who) => {
 console.log("Hello" + who);
};


var arr = [1, 2, 3, 4, 5, 6, 7];

const sumArr = (arr) => arr.reduce((kt, gtm) => kt + gtm, 0);
console.log(sumArr(arr));


var Entity = function (name, delay) {
 this.name = name;
 this.delay = delay;
};

Entity.prototype.greet = function () {
 setTimeout(() => {
  console.log("Xin chào, tên tôi là", this.name);
 }, this.delay);
};

var java = new Entity("java", 5000);
var cpp = new Entity("C++", 30);

java.greet();
cpp.greet();


const convertTemperature = (temperature, unit) => {
 if (unit === "C") {
  let Fahrenheit = (temperature * 9 / 5 ) + 32;
  console.log("Độ", Fahrenheit);
  return;
 } else if (unit === "F") {
  let Celsius = ((temperature - 32) * 5) / 9;
  console.log("Độ", Celsius);
 }
};

console.log(convertTemperature(20, "C"));
