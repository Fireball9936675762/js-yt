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
user.welcomeMessage();
user.name="Maurya"
user.welcomeMessage();


const user1={
    name: "Gaurav",
    coursePrize:500,
    welcomeMessage: function(){
        console.log(`hello ${this.name}, welcome to course`);
        
    }
}
console.log(this);          //*********importent******** */
//in node environment this line will print empty object bcz there is no global contex but in case of browser environment it will return "WINDOW" bcz window is global object in browser
