const num1=100
// console.log(num1);

const num2=new Number(500)
// console.log(num2);

// console.log(num2.toString());
// console.log(typeof num2);       //type is still object not string(only value got changed from number to string)

// console.log(num2.toString().length);
// console.log(num2.toFixed(2)); 

const num3 =23.896
// console.log(num3.toPrecision(3));

const num4=123.896
// console.log(num4.toPrecision(3));

const num5 = 1123.896
// console.log(num5.toPrecision(3));

const num6=100000000
// console.log(num6.toLocaleString("en-IN"));


//+++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.PI);
// console.log(Math.LOG2E);
// console.log(Math.abs(-4));

// console.log(Math.round(5.87));
// console.log(Math.ceil(5.87));
// console.log(Math.floor(5.87));
// console.log(Math.min(4,7,8,3));

console.log(Math.random());     // print random values bw [0,1]
console.log((Math.random()*10)+1);    
console.log(Math.floor((Math.random()*10)+1));    

//importent

const min=78
const max=88

console.log(Math.floor(Math.random()*(max-min)+1)+min);
