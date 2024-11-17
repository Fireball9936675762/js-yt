let score1=200
let score2=100
let score3=300
let total_score=Array.of(score1,score2,score3)
console.log(total_score);

//*** */
console.log(Array.isArray("Gaurav"))
console.log(Array.from("Gaurav"))
console.log(Array.from({name: "Gaurav"}))           //important: return empty obj bcz we havrn't specified key or value


//concat operator v/s spread operator

let array=[1,3,8, 7,1]
// console.log(array);
let array2=[8,9,5]
// array.push(array2);
// console.log(array);

// console.log(array.concat(array2));      //note: it returns a new array after combining
// console.log([...array, ...array2]);     //spread operator(more useful)


//flating mmultiple sub-arrays

let array4 =[1,2,[3,4,5,[6,7]],8]
console.log(array4.flat(Infinity));



