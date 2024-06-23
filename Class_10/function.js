// Parameters as reference

function sum(ob1, ob2) {
  // Impure function
  // console.log(typeof ob1); // Object
  let result = ob1 + ob2;
  ob1.value = 500;
  return result;
}

const obj1 = {
  value: 100,
};

const obj2 = {
  value: 200,
};

// console.log(sum(obj1, obj2));

// sum(obj1, obj2); // 300
// console.log(obj1.value); // 500
// sum(obj1, obj2); // 700
// console.log(obj1.value); // 500

// Parameters as value

function total(ob3value, ob4value) {
  // Pure function
  // console.log(typeof ob3value);
  return ob3value + ob4value;
}

const obj3 = {
  value: 300,
};

const obj4 = {
  value: 400,
};

// console.log(total(obj3.value, obj4.value));

let fnAsValue = function (fn) {
  console.log(typeof fn);
  let result = fn(1, 2);
  console.log(result);
};

// fnAsValue(total);

let fnAsReturnedValue = function () {
  return function () {
    console.log("Returned function");
  };
};

// console.log(typeof fnAsReturnedValue);
// console.log(fnAsReturnedValue());

const innerFn = fnAsReturnedValue();
console.log(typeof innerFn);
innerFn();
