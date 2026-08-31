// forEach

let arr =[1,2,3,4,5];

let print= function print(element) {
  console.log(element);
}

arr.forEach(print);

// OR

arr.forEach(function(element) {
  console.log(element);
});


// usage for arrow function


arr.forEach((element) => {
  console.log(element);
});

// for objects

let array = [
  {
    name: "fatima gul",
    marks: 98,
  },
  {
    name: "abul",
    marks: 97,
  },
  {
    name: "fati",
    marks: 93,
  },
  {
    name: "gul",
    marks: 88,
  },
  {
    name: "fatima",
    marks: 90,
  },
  {
    name: "dua",
    marks: 91,
  },
];

array.forEach((student) => {
    console.log(student); //also we can do this only for marks
    
})
