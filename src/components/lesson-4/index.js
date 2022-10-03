const array = [ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
];

const treeSum = (arr)=>{
const arr2 = arr.flat(Infinity);
const sum = arr2.reduce((acc, number) => acc + number, 0);
return sum;
}
console.log(treeSum(array));