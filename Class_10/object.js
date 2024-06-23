// Object

var obj = {
  name: "Nikhil",
  dob: "17/06/1995",
  age: 27,
  isMarried: false,
  techStack: ["Javascript", "React", "Node", "AWS"],
  address: {
    street: "Raghavendra Chawl",
    pincode: 580007,
    city: "Dharwad",
  },
  greet: function () {
    console.log(`Hi, My name is ${this.name}`);
  },
};

//1. Read: address
//2. Read: techStack
//3. Read: greet & execute
//4. Read: pincode
//5. Update: city to Mumbai

//1. Read: address
// console.log(obj["address"]);

// //2. Read: techStack
// console.log(obj["techStack"]);

// //3. Read: greet & execute
// console.log(obj.greet + "" + obj.greet());
// // obj.greet();

// //4. Read: pincode
// console.log(obj.address.pincode);

// //5. Update: city to Mumbai
// console.log((obj.address.city = "Mumbai"));

// //5. Update: 3rd index to GraphQL
// console.log((obj.techStack[3] = "GraphQL"));
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// var key = Object.keys(obj);
// for (var i = 0; i < key.length; i++) {
//   console.log(key[i]);
// }

for (let i in obj) {
  console.log(i);
}
