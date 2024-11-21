for (let i  = 1; i  <= 5; i ++) {
    console.log("table of ",i);
    
    for (let J  = 1; J <= 10; J ++) {
        // console.log(`${i}*${J}=`,i*J)
        // console.log(i+'*',J+'=',i*J );
}
}

// break continue
// for(i=1;i<=10;i++){
//     if (i==5) {
//         console.log("5 detected");
        
//         break
//     }
//     console.log("value is ",i);
    
// }    
for(i=1;i<=10;i++){
    if (i==5) {
        console.log("5 detected");
        
        continue
    }
    console.log("value is ",i);
    
}    

//while loop

let cricketers=["Rohit","kohli","Bumrah"]
let arr=0                                               //initialization
while (arr<cricketers.length) {
    console.log("players are playng in BGT ");
    arr=arr+1                                           //increment
    
}
    
