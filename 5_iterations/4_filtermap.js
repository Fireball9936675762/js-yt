const coding=["js","cpp","py","r"]
// const newcode=coding.forEach((value)=>{
//     console.log(value);
    
// })
// console.log(newcode);

// const newcode=coding.forEach((value)=>{
    // console.log(value);
    // return value
// })
// console.log(newcode);
// //for each loop deosnt return value in any case so we use filter operation


const maparray=[1,2,3,4,5,6,7,8]
// let newarray=maparray.filter((nums)=>{
//     console.log(nums>5)                         //shows true or false values
// return nums>4})
// console.log(newarray);

// //using explicite return

// // const maparray=[1,2,3,4,5,6,7,8]
// // let newarray=maparray.filter((nums)=>nums>4)
// // console.log(newarray);

// const array=[]                                  //using foreach loop
// maparray.forEach((num)=>{
//     if (num>4) {
//         array.push(num)
//     }
// })
// console.log(array);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let mybook=books.filter((bk)=>bk.genre==="Science")
// mybook=books.filter((bk)=>bk.publish<=2000&&bk.genre==="History")
console.log(mybook);



