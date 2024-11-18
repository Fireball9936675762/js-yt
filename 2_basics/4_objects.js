//const TinderUser= new Object()          //singelton(constructors)
const TinderUser={}                      //non singelton(literals)
TinderUser.name="Gaurav"
TinderUser.email="gaurav@email.com"

// console.log(TinderUser);

const newUser= {
    username: "mauryagaurav", name: {
        firstname: "Gaurav",
        lastname: "Maurya", id: {
            email_id: "gaurav@gmail.com"
        }
    }
}
// console.log(newUser.name.id);


let obj1={
    1: "a", 2:"e", 3: "c"
}
let obj2={
    4:"d", 5:"e"
}
// let obj3={obj1, obj2}
let obj3=Object.assign({}, obj1,obj2)   //combied array is stored in new array
// console.log(obj3===obj1);
// let obj3=Object.assign(obj1,obj2)       //bad practice 
// console.log(obj3===obj1);                

// console.log(obj3);
// console.log(obj1);

let obj4= {...obj1, ...obj2}            //spread operator
// console.log(obj4);

//values from database
let user=[
    {
        name:"gaurav",
        id:123
    },
    {
        name:"maurya",
        id:456,
        password:34556
    }
]
// console.log(user[1].password)

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty('email'));          //importent to check if key is available or not
 

//object destructuring

const course={
    name: "JS/YT",
    price:"free",
    courseInstructure:"hitesh"
}
// console.log(course.courseInstructure);

const {courseInstructure}= course
console.log(courseInstructure);

const {courseInstructure: instructor}= course
console.log(instructor);
