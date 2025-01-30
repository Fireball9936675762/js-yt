//for each loop
 const code=["js","cpp","ruby","python"]
 code.forEach(function (valueinsidearray){
   //  console.log(valueinsidearray); 
    
 })

 //for each is inbuilt prototype of array and mostly used loop. it calls callback function(doesn't have name)

 //using arrow fn
 code.forEach( ()=>{
    // console.log(valueinsidearray);
    
 })


 function printme(valueinsidearray){
   console.log(valueinsidearray);
   
 }
//  code.forEach(printme)                 //if function is defined separately


//other parameters of for each
code.forEach((valueinsidearray, index, arr) =>{
   // console.log(valueinsidearray,index,arr);
   
})

//////////////////////////////////////////////////////////////////////////////////////

//[{},{},{}]

const newcode=[
   {
      name:"gm",
      id:123
   },
   {
      name:"mg",
      id:321
   },
   {
      name:"gk",
      id:987
   }
]
// newcode.forEach((value)=>
// {   console.log(value.name)
// 
// })