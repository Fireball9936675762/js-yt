//primitive  datatypes {call by value}: (string, number, boolean, null, undefined, symbol, bigint)

//stack memory is used in case of primitive. a copy of memory is provided so that original data doesn't change

let myName="Gaurav"
let yourName=myName
// console.log(yourName);
yourName="Maurya"
// console.log(yourName);


//non primitive(reference) datatype {call by reference}: [object, array, function]

//heap is used in this case where reference of memory is given

let obj1={
    name:"Gaurav",
    FGF:"RT"
}
let obj2=obj1

obj2.FGF="Ak"

console.log(obj1.FGF);
console.log(obj2.name);



