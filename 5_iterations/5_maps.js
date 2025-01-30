const myarray=[5,3,7,8,9,1]
// let newarray=myarray.map((num)=>num+10)
let newarray=myarray   
                    .map((num)=>num*10)
                    .map((num)=>num+5)                  //chaining
                    .filter((num)=>num>=80)

// console.log(newarray);

////////////////////////////***REDUCE***///////////////////////////////////////////
const array=[1,2,3,4]
const totalreduce=array.reduce(function (accumulator,currentvalue) {
    console.log(`accumulator= ${accumulator}, currentvalue= ${currentvalue}`);
    
    return accumulator+currentvalue
},5)
// console.log(totalreduce);

//using arrow function
// const totalreduce=array..reduce((accumulator,totalreduce)=>accumulator+totalreduce,0)

let prize=[{
        course1:"book1",
        price:499
    },
    {
        course2:"book2",
        price:999
    },
    {
        course3:"book3",
        price:1499
    }]

// let finalprize=prize.reduce((accumulator,item)=> accumulator+item.price,0)
let finalprize=prize.reduce((accumulator,item)=> {
    console.log(`accumulator is ${accumulator} annd price is ${item.price}`)
    return accumulator+item.price},0)
console.log(finalprize);

