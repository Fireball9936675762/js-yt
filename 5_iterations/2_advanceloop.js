// //for of loop(array speciffic loop)
// const array=[1,2,3,4,5]
// for (const arr of array) {
//     // console.log(arr);
// }

let string="hello gaurav"
for (const str of string) {
    if (str==" ") {
         continue
        
    }
    // console.log(str);
}

//Map

const map = new Map()
map.set('In','India')
map.set('USA','America')
map.set('In','India')
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,value);
    
    
}

// for (const  [m] of map) {
//     console.log(m);  
// }

let objct={
    name:"GM",
    id:123
    
}

// for (const obj of objct) {
    // console.log(obj)  
    
// }
                                                //objects aren't iterable

//forin loop

const myobject = {
    js:"javascript",
    cpp:"c++"

}
for (const obj in myobject){
    // console.log(obj);
    // console.log(myobject[obj]);
    // console.log(`${obj} is named as ${myobject[obj]}`);
    
    
    
    
}
// for (const [obj] in myobject) {
//     console.log(obj);

// }

const array1=["js","cpp","python"]
for (const arr1 in array1) {
    // console.log(arr1);                   //signifies keys of array
    console.log(array1[arr1]);
    
}

// const map = new Map()
// map.set('In','India')
// map.set('USA','America')
// map.set('In','India')
// // console.log(map);
// for (const key in map) {
//     console.log(key);
    
// }                                                   //maps are not iterable



///////////////////////////////////////////////////////////////////////////////
// in broad term forin loop is used on objects and forof used for arrays