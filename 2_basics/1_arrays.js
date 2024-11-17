let array=[1,3,8, 7,1]
// console.log(array);
let array2=[8,9,5]

// console.log(array.push(5));
// console.log(array.pop());
// console.log(array.unshift(6));
// console.log(array.shift());

// console.log(array2.includes(4));
// console.log(array2.includes(9));
// console.log(array2.indexOf(9));
// console.log(array2.indexOf(4));

let array3= array2.join()
// console.log(array3);
// console.log(typeof array3);

//slice, splice

console.log("A ", array);
let newArray= array.slice(1,3)
console.log(newArray);

console.log("B ", array);
let newArray2=array.splice(1,3)
console.log(newArray2);
console.log("C ", array);

//note: splice operation manipulates the original string and takes out the values for the mentioned range





