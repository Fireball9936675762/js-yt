// for (let i  = 1; i  <= 5; i ++) {
//     console.log("table of ",i);
    
//     for (let J  = 1; J <= 10; J ++) {
//         // console.log(`${i}*${J}=`,i*J)
//         // console.log(i+'*',J+'=',i*J );
// }
// }

// break continue
// for(i=1;i<=10;i++){
//     if (i==5) {
//         console.log("5 detected");
        
//         break
//     }
//     console.log("value is ",i);
    
// }    
// for(i=1;i<=10;i++){
//     if (i==5) {
//         console.log("5 detected");
        
//         continue
//     }
//     // console.log(`value is ${i}`);
//     console.log("value is ",i);
    
// }    

let myarray=["a","b","c"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

//while loop

let cricketers=["Rohit","kohli","Bumrah"]           //declaration
let arr=0                                           //initialization
while (arr<cricketers.length) {
    console.log(cricketers[2], " is goat");
    console.log(cricketers[1], " is goat");
    console.log(cricketers[0], " is hitman");
    arr=arr+1                                           //increment
    
}

//do while
let i=1  
do {
    console.log(`the value is ${i}`);
    i=i+2
    
} while (i<10);
    

