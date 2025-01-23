// const user={
//     name: "Gaurav",
//     coursePrize:500,
//     welcomeMessage: function(){
//         console.log(`hello ${this.name}, welcome to course`);
        
//     }
// }
// user.welcomeMessage();
// user.name="Maurya"
// user.welcomeMessage();      //contex got changed bcz "this" refer contex within scope

const user={
    name: "Gaurav",
    coursePrize:500,
    welcomeMessage: function(){
        console.log(`hello ${this.name}, welcome to course`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.name="Maurya"
// user.welcomeMessage();


const user1={
    name: "Gaurav",
    coursePrize:500,
    welcomeMessage: function(){
        console.log(`hello ${this.name}, welcome to course`);
        
    }
}
// console.log(this);          //*********importent******** */
//in node environment this line will print empty object bcz there is no global contex but in case of browser environment it will return "WINDOW" bcz window is global object in browser

function chai() {
    console.log(this);
    // let username= "Gaurav"
    // console.log(this.username);      //this mathod can only be used in case of object
}
// chai()

//*****************Arrow function************************* */

const coffee=()=>{
    
    // let username= "Gaurav"
    // console.log(this.username); 
    console.log(this);
    
}
coffee()

const add=(num1, num2)=> (num1+num2);       //implicite expression
// console.log(add(4,7))


// immediatly invoked function expresssion: function needs to  execute just after writing it. Also to protect it from global scope pollution

(function chai(){
    console.log("myChai");
    
})();

//";" is compulsory bcz javascript doesnt know where to end the context

//IIFE Using arrow fn

((myName)=>{
    console.log(`my name is ${myName}`);
    
})("Gaurav")


//*****************************DOUBT************************************ */

//CHAT-GPT SEARCH 

// case 1. 
// let JsUser={
//     full: "Gauravji",

// }
// JsUser.greetingtwo=function(){
//     console.log(hello ${this.full} ); 
//  }
// console.log(JsUser.greetingtwo());
// case 2.
// function num(){
//     let abc="Gaurav"
//     console.log(this.abc);
    
// }
// num()

// in case 1, this function is returning value  but in case of case 2, this function retuns "undefined"
// why?

// Summary of how this works in different contexts:

// Global context: this refers to the global object (window in browsers, global in Node.js).
// Inside an object method: this refers to the object the method is a part of.
// In strict mode: If a normal function is called in the global scope or without an object, this is undefined.
// Arrow functions: this is lexically bound and refers to the context in which the function is defined, not where it's called
