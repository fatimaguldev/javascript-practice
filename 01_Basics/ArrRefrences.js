let arr = ['a', 'b', 'c', 'd'];

let arrCopy = arr;
arrCopy === arr;

// the value will be true becase we have changed the arr value to arr
//arr
// (4) ['a', 'b', 'c', 'd']
// arrCopy
// (4) ['a', 'b', 'c', 'd']

arrCopy == arr; 

arr.push('d');
// out will be a, b, c, d, of both the arr and arrCopy
