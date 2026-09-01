let num = [1, 2, 3, 4];
let double = num.map((el) =>
{
    return el * 2;
    
})


let student = [
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

let gpa = student.map((el) => {
    return el.marks / 10;

});