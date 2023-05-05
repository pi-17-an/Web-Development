const items = ["apple", "orange", "banana"];

items[3] = "purple";
// adding elements
// items.push('watermelon')
// items.unshift('grapes')
// items.splice(3, 0, 'lion')

//removing elements
items.pop();
items.shift();
console.log(items);

//includes method true or false
//true or false
console.log(items.includes("banana"));
console.log(items.indexOf("purple"));
//reference array
// const orders = [
//     { id: 1, item: "Android", quantity: 1},
//     { id: 2, item: "Mac", quantity: 2}
// ]
//    //find
// let result = orders.find(function (order) {
//     return order.id == '2'
// })
// console.log(result);

const animal = [
  { count: 1, item: "dog", age: 7 },
  { count: 2, item: "cat", age: 4 },
  { count: 3, item: "lion", age: 6 },
  { count: 4, item: "tiger", age: 5 },
  { count: 5, item: "rat", age: 8 },
];
//arrow function
let catgery = animal.find((price) => {
  return price.item === "lion";
});
// call back function
let catger = animal.find(function (price) {
  return price.age === 8;
});
console.log(catgery);
console.log(catger);

// Emptying an JS array

let count = [1, 2, 3, 4, 5];
let count_item = count;
count = [];

console.log(count_item);

// combining(merge) array

let shopping = ["maggi", "water", "beans", "carrot"];
let additional = ["rice", "dal", "oil", "cooker"];

// spread

let spred = [...shopping, 45, { name: "akash" }, ...additional];
console.log(spred);
// let combin = shopping.concat(additional);

// let extracted = combin.slice(1, 3);

// console.log(combin);
// console.log(extracted);

// let shopping = [{item: 'maggi'}, {item: 'seamiya'}]
// let additional= ['rice', 'dal', 'oil', 'cooker']
// // combin
// let combin = shopping.concat(additional);
// // extract
// shopping[1].item = "Noodles";
// let extracted = combin.slice(1, 3);

// console.log(combin);
// console.log(extracted);

// iterating array
let dailyRoutine = ["wakeup", "eat", "sleep"];
// of for value
for (let routine of dailyRoutine) {
  console.log(routine);
}
// in for key
for (let daily in dailyRoutine) {
  console.log(daily);
}
// for each
dailyRoutine.forEach((food) => console.log(food));

// joining & splitting arrays

let water = ["cold", "hot", "normal"];
let drinkingWater = water.join("-s");

console.log(drinkingWater);

let fullName = "Anbu Ajay";

let names = fullName.split(" ");

let firatname = names[0];
let lastName = names[1];
console.log(`My first Name is ${firatname} last name is ${lastName}`);

console.log(names);

let postTit = "This is My Area".toLowerCase();

let postSlug = postTit.split(" ");

let postJoin = postSlug.join("-");
console.log(postJoin);

// Sorting a javascript
/*
    a > b --> 1     ||
                    || ==> ascending order
    a < b --> -1    ||
========================================================= 
    a > b --> -1    ||
                    || ==> descending order
    a < b -->  1    ||
*/

const stude = [1, 4, 3];
stude.reverse();
//assining
stude.sort();
// desining
stude.sort(function (a, b) {
  return b - a;
});
console.log(stude);

const student = [
  { id: 5, name: "Kodi" },
  { id: 2, name: "Dhanush" },
  { id: 8, name: "Pirai" },
];

// console.log(student);

student.sort((a, b) => {
  nameA = a.name.toLowerCase();
  nameB = b.name.toLowerCase();
  //a < b -1

  if (nameA < nameB) return -1;

  // a > b 1

  if (nameA > nameB) return 1;

  //a === b 0

  return 0;
});
console.log(student);

//  primitives: Testing a array

let under_age = [24, 32, 44];

let isAllowed = under_age.every(function (value, index, array) {
  return index >= 18;
});
console.log("isAllowed: ", isAllowed);

// Testing

const number = [2, 4];

let isEven = number.every(function (value) {
  return value % 2 === 0;
});
const number1 = [1, 2, 3, 4, 5];
let isOdd = number1.some(function (value) {
  return value % 2 !== 0;
});

console.log(isEven);
console.log(isOdd);

let ite = [
  { id: 1, name: "Mobiles", isDeliverable: true },
  { id: 2, name: "Accessories", isDeliverable: true },
  { id: 3, name: "T.V", isDeliverable: false },
];
let allDeliverd = ite.some(function (value) {
  return value.isDeliverable == true;
});
console.log("isAllowed: ", allDeliverd);

// Filtering ArrayZ

let dkodi = [15, 42, 43];

let fiber = dkodi.filter(function (value) {
  return value <= 18;
});
console.log(fiber);

let cart_item = [
  { id: 1, items: "Android Mobiles", price: 6500 },
  { id: 2, items: "iphone Mobiles", price: 26500 },
  { id: 3, items: "Windows Mobiles", price: 8500 },
];

let myItem = cart_item.filter(function (value) {
  return value.price <= 7000;
});
console.log(myItem);

//Map Array

let counts = [1, 2, 3, 4, 5, 6]
let numberCount = counts.map(function (value) {
  return value*2
})
console.log(numberCount);

let values = [
  { id: 1, firstName: "Android", secondName: "Mobiles"},
  { id: 2, firstName: "iphone", secondName: "Mobiles"},
  { id: 3, firstName: "Windows", secondName: "Mobiles"},
]

fullName = values.map(function (value) {
  // let obj = [value.firstName, value.secondName].join(" ")
  let obj = value.firstName
  return {id: value.id, obj}
})
console.log(fullName);

// chaining methods

let Mobiles = [
  { id: 1, title: "Poco", Cost: 23000},
  { id: 2, title: "OnePlus", Cost: 40000},
  { id: 3, title: "Samsung", Cost: 30000},
];

// sort it using lowest price
let mobileSortLowest = Mobiles.sort(function (a, b) {
 return a.Cost - b.Cost // ascending
//  return b.Cost - a.Cost // descending
})
.sort(function (a, b) {
    if (a.title < b.title)  
    return -1
    if (a.title > b.title) 
    return 1
    return 0
  }) 
  .filter( value => value.Cost >= 25000)
    .map(value  => {
         let result = [value.title, value.Cost].join(" - $")
         return result
      })
      console.log(mobileSortLowest);
// console.log(mobileSortLowest);
// // sort it by title ascending 

// let mobileSort =mobileSortLowest.sort(function (a, b) {
//   if (a.title < b.title)  
//   return -1
//   if (a.title > b.title) 
//   return 1
//   return 0
// }) 
// console.log(mobileSort);
// // filter products less than 32000

// let mobileFilter = mobileSort.filter(function (value) {
//   return value.Cost >= 25000
// })
// console.log(mobileFilter);
// // map it like this: // poco - 23000 

// let mobileMap = mobileFilter.map(function (value) {
//    let result = [value.title, value.Cost].join(" - $")
//    return result
// })
// console.log(mobileMap);

// Arrays reduce method

const reduceNumber = [
  {id:1, Oraginic: "Mike", Cost: 30},
  {id:2, Oraginic: "Bread", Cost: 45},
  {id:3, Oraginic: "Maggi", Cost: 10},
]

// function addCost(accumulator, currentvalue) {
//   return  accumulator - currentvalue.Cost
// }
const addCost = (accumulator, currentvalue) => {
    return  accumulator - currentvalue.Cost
  }

let donation = reduceNumber.reduce(addCost, 10) 
  console.log(donation);

// difference sort(), find(), vs filter vs map(), vs reduce

// to sort to ascii values american standard code for information interchange

const num = [34, 52, 'a', 12, 103]

// sort 
let sortMeth = num.sort();
 
console.log(sortMeth);

//JS function

let no1 = 45;
let no2 = 680;

// Function Declaration
// function addNo() {
  
//   let result = no1 + no2;
//   console.log(result);
// }

// function expression  (named function expression)

// let addNo = function addNo() {
  
//   let result = no1 + no2;
//   console.log(result);
// }

// Anonymous function expression

let addNo = () => {
  
  let result = no1 + no2;
  console.log(result);
};
// const addNo = new Function("console.log(no1+no2)"); 
addNo();

// Hoisting
addNodeclaration();
function addNodeclaration() {
  console.log("adding function : declaration");
}

let addNoexpression = function () {
  console.log("adding function : expression");
};

addNoexpression();

// self invoking functions

let id = 45;
let id1 = 55;
// (Immediately Invoked Function Expression (IIFE))
let dis = id + id1;
(function displayId() {
  console.log("Result:", dis);
})();
//  displayId();  

// Function arguments

