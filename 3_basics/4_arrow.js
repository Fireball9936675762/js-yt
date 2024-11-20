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
// coffee()


const add =(num1,num2)=> (num1+num2)                //implicite return
console.log(add(4,5));

const print =()=> ({username:"Gaurav"} )               //implicite return
console.log(print());

