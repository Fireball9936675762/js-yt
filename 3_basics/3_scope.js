let a=45
const b=67
var c=11
if (true) {
    let a=2
    const b=6
    var c=5
    d=9
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);             //var can take ALSO LOCAL VARIABLE and this create confusion


//***************scope in nested function****************** */
function outer(){
    const firstName="Gaurav"
    function inner() {
        const lastName="Maurya"
        console.log(firstName);
        
    }
    inner()
// console.log(lastName);

}
// outer()

//***************scope in if-else statement****************** */
if (true) {
    const firstname="Gaurav"
    if (true) {
        const lastname="Maurya"
        // console.log(firstname);
        
    }
    // console.log(lastName);
    
}

// ***************function and expression difference**************
function add(num1) {
    return num1+5
}
console.log(add(5))

const add2 =function(num2){
    return num2+1
}
console.log(add2(5))

//note: in case of function, execution part can be done before or after but in case of expression you need to define variable before initialization