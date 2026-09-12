// Questions of Map, Filter, Reduce.
//MAP

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//1. Use map to double every number in numbers.

// function makeDouble(x){
//    return x*2;
// }
// const double = numbers.map(makeDouble)
const double = numbers.map( x => x*2 )

console.log(numbers)
console.log(double)
