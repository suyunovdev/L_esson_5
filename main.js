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
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert(message);
// }

// showMessage(); // Hello, I'm JavaScript!

// alert(message); // <-- Error! The variable is local to the function

// ANONYMOUS FUNCTION ----/////////////////////////
// (function (a, b) {
//   let c = a + b;
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



///UYGA VAZIFA /////////////////////////////


//1-masala
// function power(a, n) {
//   let natija = 1;

//   for (let i = 0; i < n; i++) {
//     natija *= a;
//   }

//   return natija;
// }


// let son = +prompt("sonni kiriting"); 
// let daraja = +prompt("darajani kiriting"); 
// let natija = power(son, daraja);
// console.log(son + " ning " + daraja + "-darajasi: " + natija);


///2-masala

// function mean(a, b) {
//   let arifmetc = (a + b) / 2;
//   let geometric = Math.sqrt(a * b);
//   return {
//     arithmetic: arifmetc,
//     geometric: geometric
//   };
// }
// let number1 =+prompt("a sonni kiritng"); 
// let number2 =+prompt("b sonni kiritng"); 
// let natija = mean(number1, number2);

// console.log("O'rta arifmetikasi: " + natija.arithmetic);
// console.log("O'rta geometriyasi: " + natija.geometric);

///3-masala
// function sign(n) {
//   if (n < 0) {
//     return -1;
//   } else if (n > 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// let number = +prompt("son kiritng"); 
// let result = sign(number);

// console.log("Sign(" + number + "): " + result);

//4-masala
// function circleArea(r) {
//   if (r < 0) {
//     return "Radius manfiy bo'lishi mumkin emas.";
//   } else {
//     return Math.PI * Math.pow(r, 2);
//   }
// }
// let radius =+prompt("radiusni kiritng"); 
// let area = circleArea(radius);
// console.log("Doira yuzasi: " + area);

//5-masala

// function sumRange(a, b) {
//   if (a > b) {
//     return 0;
//   }

//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }

//   return sum;
// }
// var a =+prompt(" a sonni kiritng");
// var b =+prompt(" b sonni kiritng"); 
// var result = sumRange(a, b);

// console.log("Summa (" + a + " dan " + b + " gacha): " + result);

//6-masala

// function isEven(number) {
//   return number % 2 === 0;
// }
// let number =+prompt("son kiritng"); 
// let natija = isEven(number);

// console.log(number + " juftmi? " + natija);

//7-masala
// function findMinMaxAverage(a, b, c) {
//   let  min = Math.min(a, b, c);
//   let  orta = (a + b + c) / 3;
//   let  max = Math.max(a, b, c);
//   return {
//     min: min,
//     average: orta,
//     max: max
//   };
// }
// let  a = parseFloat(prompt("1-sonni kiriting:"));
// let  b = parseFloat(prompt("2-sonni kiriting:"));
// let  c = parseFloat(prompt("3-sonni kiriting:"));
// let  result = findMinMaxAverage(a, b, c);
// console.log("Eng kichik son: " + result.min);
// console.log("O'rtacha son: " + result.average);
// console.log("Eng katta son: " + result.max);

//8-masala
// function isPrime(n) {
//   if (n <= 1) {
//     return false; 
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false; 
//     }
//   }
//   return true;
// }
// let num =+prompt("son kiritng");
// let result = isPrime(num);

// console.log(num + " tubmi? " + result);


//9-masala
// function numberOfPrimes(n) {
//   let count = 0;

//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// let limit = 30; 
// let result = numberOfPrimes(limit);

// console.log("1 dan " + limit + " gacha bo'lgan tub sonlar soni: " + result);

//10-masala

// function inverseNumber(n) {
//   let sum = 0;

//   while (n > 0) {
//     let oxirgiraqam = n % 10;
//     sum = sum * 10 + oxirgiraqam;
//     n = Math.floor(n / 10);
//   }

//   return sum;
// }

// // Test qilish
// let num = +prompt("istalgancha raqam kiriting"); 
// let result =inverseNumber(num);

// console.log(num + " sonining teskasi: " + result);

//11-masala
// function factorial(n) {
//   if (n < 0) {
//     return 1; 
//   }

//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }
// let number = +prompt("son kiriting");
// let result = factorial(number);

// console.log(number + " sonlar ko'paytmasi: " + result);

//12-masala
// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// var number = +prompt("son kiriting"); 
// var result = getSum(number);

// console.log("1 dan " + number + " gacha bo'lgan 3 ga bo'linadigan sonlar yig'indisi: " + result);

//13-masala
// function decTime(h, m, s) {
//   if (s > 0) {
//     s--;
//   } else {
//     if (m > 0) {
//       m--;
//       s = 59;
//     } else {
//       if (h > 0) {
//         h--;
//         m = 59;
//         s = 59;
//       } else {
//         return "Vaqt nolga teng.";
//       }
//     }
//   }

//   return "Oldingi vaqt: " + h + " soat, " + m + " minut, " + s + " sekund.";
// }
// var hours = +prompt("soatni kiriting");
// var minutes = +prompt("minutni kiriting"); 
// var seconds = +prompt("sekundni kiriting"); 
// var result = decTime(hours, minutes, seconds);

// console.log(result);

//14-masala

// function isLeapYear(y) {
//   return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
// }
// var year = +prompt("istalgan yilni kiriting"); 
// var result = isLeapYear(year);

// console.log(year + " yili kabisa yilmi? " + result);

//15-masala

function getDivedersNumberAndSum(n) {
  let diveder = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      diveder.push(i);
      sum += i;
    }
  }

  return {
    diveder: diveder,
    sum: sum
  };
}

let number = +prompt("istalgan sonni kiriting"); 
let result = getDivedersNumberAndSum(number);

console.log(number + " sonining bo'luvchilari: " + result.diveder);
console.log(number + " sonining bo'luvchilari yig'indisi: " + result.sum);






