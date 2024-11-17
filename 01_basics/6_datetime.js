let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(`today's date is ${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`);


// to crate a specific date

// let newDate= new Date(2024, 13,10)
// let newDate= new Date(2024, 13,10,5,3)
let newDate= new Date("2024-01-24")          //mm/dd/yy
// let newDate= new Date("01-10-2024")      //dd//mm//yy

// console.log(newDate.toLocaleString());
// console.log(newDate.toString());

let timestamp= Date.now()
// let timestamp= Date.

console.log(timestamp.toLocaleString());
console.log(newDate.getTime());
console.log(Math.floor(timestamp/1000));


console.log(
(newDate.toLocaleString('default' , {
    weekday:"long"
})))
