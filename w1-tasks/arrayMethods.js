let arr1 = [1, 2, 3, 4, 5];


const res1 = arr1.map(ele => ele * 5)
console.log(arr1 , "applying map() method --> ", res1);

const res2 = res1.filter(ele => ele % 2 === 0)
console.log("\n", res1, "filtering even elements -->", res2 );

const res3 = arr1.reduce((acc, curr) => acc + curr, 0) //here i have written the callback fn as a simple totaling of the elements of the array
console.log("\napplying reduce() method -->", res3);

