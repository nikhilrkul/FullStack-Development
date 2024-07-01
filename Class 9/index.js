var cartQuantity = 20;

// if (cartQuantity) {
//   console.log("Widget 1");
// } else {
//   console.log("Widget 2");
// }

// cartQuantity > 0 ? console.log("Widget 1") : console.log("Widget 2");

/******** 1: Different way of writing if statement *****/

// if (cartQuantity > 0) {
//   console.log("Widget 1");
// } else if (cardQuantity > 10) {
//   console.log("Widget 2");
// } else {
//   console.log("Widget 3");
// }

/******** 2: Different way of writing if statement *****/

// if (cartQuantity > 10) {
//   console.log("Widget 2");
// }

// if (cartQuantity > 0) {
//   console.log("Widget 1");
// }

// console.log("Widget 3");

/******** Switch case *****/

// switch (cartQuantity) {
//   case 0:
//     console.log("Widget 1");
//     break;
//   case 20:
//     console.log("Widget 2");
//     break;
//   default:
//     console.log("Widget 3");
// }

// switch (cartQuantity) {
//   case 0:
//     console.log("Widget 1");
//   case 20:
//     console.log("Widget 2");
//   default:
//     console.log("Widget 3");
// }

/******** Scoping *****/

// var g = "global scope";
// console.log("1 >", g);

// function outer() {
//   var o = "outer scope";
//   console.log("2 >", g, o);

//   function inner() {
//     var i = "inner scope";
//     console.log("3 >", g, o, i);
//   }
//   inner();
// }

// outer();

// 1 > global scope undefined undefined
// 2 -> global scope outer scope undefined
// 3 -> global scope outer scope, inner scope

// console.log(a, b);
// var a = 10;
// var b = 20;

// function inner() {
//   console.log(a, b);
//   a = 10;
//   var b = 20;
// }

// inner();

// console.log(x);
// let x = 10;

/** -------------------------------- */
// for (var i = 0; i < 5; i++) {
//   console.log("First >", i);
// }

// for (i = 0; i < 5; i++) {
//   console.log("Second >", i);
// }

/** Output :
 * First > 0
 * First > 1
 * First > 2
 * First > 3
 * First > 4
 *
 * Second > 0
 * Second > 1
 * Second > 2
 * Second > 3
 * Second > 4
 * */

// console.log("Sum > ", sum(1, 2));
function sum(...args) {
  // console.log(arguments);

  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
  // return a + b;
}

console.log("Sum > ", sum(1, 2));
console.log("Sum > ", sum(3, 4));
console.log("Sum > ", sum(3, 4, 5));

// console.log("Total > ", total(3, 4));
// var total = function (a, b) {
//   return a + b;
// };
