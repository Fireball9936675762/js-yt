const firstname="Gaurav"
const laastname="Maurya"

// console.log(firstname + laastname);
// console.log(`hello my name is ${firstname} ${laastname}`);
// console.log("hello my name is "+ firstname+" "+ laastname);


const myName= new String("Gaurav Maurya")
// it is used to create object which can be more understood in browser consle
// console.log(myName);

//methods for object: string{"GauravMaurya"}

// console.log(myName.length);
// console.log(myName[3]);
// console.log(myName.slice(0,6));     //-ve value is also acceptable
console.log(myName.substring(0,4));     //-ve value not supported     
// console.log(myName.toUpperCase());
// console.log(myName.charAt(5));
// console.log(myName.indexOf("r"));
console.log(myName.split());               //returns a array of splitted elements
// console.log(myName.split(''));           
console.log(myName.split(' '));

let newstring ="    Gaurav   "      //confussion: newstring is not object yet we apply method on it
console.log(newstring);
console.log(newstring.trim());

const url="http://gaurav.com"
console.log(url.replace('gaurav', "maurya"));












// console.clear()
