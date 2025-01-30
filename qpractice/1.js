let prize=[{
        course1:"book1",
        price:499
    },
    {
        course2:"book2",
        price:999
    },
    {
        course3:"book3",
        price:1499
    }]

let finalprize=prize.reduce((accumulator,item)=> accumulator+item.price,0)
console.log(finalprize);
