// let month=2
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;

//     default:
//         console.log("summer has started");
        
//         break;
// }
let month="feb"
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case "feb":
        console.log(" its february");
        break;
    default:
        console.log("summer has started");
        
        break;
}

//*************TRUTHY FALSY value************************ */

//falsy values: false, 0,-0, bigInt 0n, "", null, undefined, NaN

// truthy value: " ",[],{},function(){} and all non falsy value(we assume them to be true)

const name="Gaurav"
if (name) {
    console.log("my name is Gaurav ");
    
}
const Name=""
if (Name) {
    console.log("my name is Gaurav ");
    
}

//Q. How to detect if a function/object is empty

let fun=[]
if(fun.length==0){
    console.log("Array is empty");
    
}

//importent
let obj={}
if ((Object.keys(obj)).length==0) {
    console.log("object is empty");
}

//Ternary operator

// condition? true:false
let price=50
price>=40 ? console.log("Greater than 40"): console.log("lesser");

//nullesence operator

let val;
// val=5??10
// val=null??10
// val=undefined??18
val=null??10??15
console.log(val);



