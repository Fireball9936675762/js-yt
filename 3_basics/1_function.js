// function name(){
//     console.log("Gaurav");
//     return 0
    
// }
// console.log(name);
// name()
// console.log(name());

//*********************+++++++++++++++++++***************************** */

function sum(num1, num2) {
    console.log(num1+num2);
    let result =num1+num2
    return result
}
// let result= sum(3,4)
// console.log("Result is: " result);
// return is used to store the value in a variale

//************************************************************************ */
// function userlogin(username){
//     return `${username} just logged in`
// }
// console.log(userlogin("Gaurav"))
// console.log(userlogin(""))
// console.log(userlogin())

function userlogin(username="sam"){
    if (username===undefined) {
        console.log("please enter username");
        return 
    }
    //or
    // if (!username) {
    //     console.log("please enter username");
    //     return 
    // }
    return `${username} just logged in`
}
console.log(userlogin())