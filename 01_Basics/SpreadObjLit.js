const data = {
    email: "fatimagul2110@gmail.com",
    passowrd: "abcd"
};

const DataCopy = { ...data, id: 123, country: "pakistan" };


let arr = [1, 2, 3, 4, 5]; //here only values are given

// in object lit we take key:value
//so instead of key the index will be stored
let obj1={...arr}