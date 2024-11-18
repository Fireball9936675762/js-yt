// objects can be declared as literals or as constructors. singeltons are formed in case of constructors

//object constructors
// Object.create

//object literals

//note: system defines/understands keys as string in the object
const JsUser={
    name: "Gaurav",
    "full name": "Gaurav Maurya",
    age: 23,
    email: "gaurav@google.com",
    married: false

}
//accessing the keys 
// console.log(JsUser.age);        
// console.log(JsUser["age"]);     //more sophasticated way of accessing keys
// console.log(JsUser["full name"]);


//symbols in object
 const Mysymbol=Symbol("Aawara")

 const JsUser1={
    name: "Gaurav",
    "full name": "Gaurav Maurya",
    age: 23,
    [Mysymbol]:"Mai Aawara"                 //syntax to declare symbol as a key
 }
//  console.log(JsUser1[Mysymbol]);
//  console.log(typeof JsUser1[Mysymbol]);

JsUser1.age=24                     //overwriting key's value
Object.freeze(JsUser1)             //freezing object 
console.log(JsUser1);

 //function in objects
 JsUser.greeting=function(){
    console.log("Hello Gaurav");
    return 0  
 }
 JsUser.greetingtwo=function(){
    console.log(`hello ${this["full name"]}` );
    return 0  
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingtwo());
 
 
 
