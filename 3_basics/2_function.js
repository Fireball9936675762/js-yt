function totalCartValue(...num1){           //rest operator(store as many value you want)
    return num1
}
// console.log(totalCartValue(200,5000,600,809));


// function totalCartValue(val1, val2, ...num1){           
//     return num1
// }
// console.log(totalCartValue(200,5000,600,809));

/*********Passing object in fnction******************** */

let user ={
    name:"Gaurav",
    age:23
}

function handleObject(anyoject) {
    console.log(`Username is ${anyoject.name}, Age is ${anyoject.age}`);
}
// handleObject(user)
//or
handleObject(user={
    name: "Maurya",
    age: 24
}) 

/*********Passing Array in fnction******************** */

let arr1=[25,50,75,100]
function returnArrayValue(anyArray) {
    return anyArray[3]
}
// console.log(returnArrayValue(arr1))
//or
console.log(returnArrayValue([1,2,7,9]));
