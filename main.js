// LESSON-41
// FUNCTION ----------////////////////////////////
// FUNCTION DECLARATION   /////////////////////////
// function functionName(parameters) {
//   // function body
// }

// function say() {
//   console.log('Hello World!');
// }

// say();

// function hello(name) {
//   console.log('Hello ' + name + ' !');
// }

// hello('John');
// hello('Tom');
// hello('Steve');

// function perimetr(a, b) {
//   let p = 2 * (a + b);
//   console.log(p);
// }

// perimetr(3, 4);

// function fullName(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// fullName('John', 'Doe');

// RETURN ////////////////

// function say(message) {
//   console.log(message);
//   return 45;
//   console.log('Salom');
// }
// // say('Hello');

// let result = say('Hello');

// console.log('Result:', result);

// function add(a, b) {
//   return a + b;
// }

// let result = add(4, 5);
// console.log(result);

// function compare(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   }
//   return 0;
// }

// console.log(compare(3, 4));
// console.log(compare(3, 1));
// console.log(compare(3, 3));

// function say(message) {
//   if (!message) {
//     return;
//   }
//   console.log(message);
// }

// say();
// say('');
// say('Hello');

// function showMessage(person, message = 'Hello') {
//   alert(person + ': ' + message);
// }

/* function showMessage(from) {
  if (typeof text == undefined) {text = "no text given"}
  alert( from + ": " + text );
} */

// showMessage('Ann'); // Ann: Hello

// showMessage('Ann', undefined); // Ann: Hello

// function add(a, b) {
//   return a + b;
// }
// console.log(add);
// console.log(add(3, 4));

// let sum = add;
// console.log(sum);

// let result = add(10, 20);

// let result = sum(10, 20);

// console.log(result);

// LOCAL SCOPE ////////////////////////
// function showMessage() {
//   var message = "Hello, I'm JavaScript!"; // local variable

//   alert(message);
// }

// showMessage(); // Hello, I'm JavaScript!

// alert(message); // <-- Error! The variable is local to the function

// ANONYMOUS FUNCTION ----/////////////////////////
// (function (a, b) {
//   var c = a + b;
//   console.log(c);
// })(3, 4);

// console.log(c);

// FUNCTION DECLARATION ///////////
// function add(a, b) {
//   console.log(a + b);
// }
// add(4, 5);

// FUNCTION EXPRESSION /////////
// const add = function (a, b) {
//   console.log(a + b);
// };
// add(2, 5);

// ARROW FUNCTION //////////////////

// const add = (a, b) => {
//   console.log(a + b);
// };
// add(2, 5);

// const add = (a, b) => {
//   return a + b;
// };
// const add = (a, b) => a + b;
// console.log(add(2, 5));

// DARSDA-1   ////////////////////////
// function rectangle(a, b) {
//   const perimetr = 2 * (a + b);
//   const yuza = a * b;
//   console.log(`perimetri: ${perimetr} va yuzasi: ${yuza}`);
// }
// rectangle(10, 20);

// DARSDA-8  ///////////////////////
// function incTime(h, m, s) {
//   let second = s + 1;
//   let minut = m;
//   let hour = h;
//   if (second === 60) {
//     minut++;
//     second = 0;
//   }
//   if (minut === 60) {
//     hour++;
//     minut = 0;
//   }
//   hour = hour === 24 ? 0 : hour;
//   return `${hour < 10 ? '0' + hour : hour}:${
//     minut < 10 ? '0' + minut : minut
//   }:${second < 10 ? '0' + second : second}`;
// }

// console.log(incTime(0, 6, 40)); // 00:06:41
// console.log(incTime(0, 6, 59)); // 00:07:00
// console.log(incTime(1, 59, 59)); // 02:00:00
