// ===============№1===============
// function checkArrey(arr) {
//     for (let i =0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr
// }
//     console.log(checkArrey([1, 2, 3, 0, 4, 5]))

//===============№2===============

// let num = [1, 2, 3, 0, 4, 5, 6]
// function checkNull () {
//     for (let i = 0; i<num.length; i++) {
//         if(num[i]>0){
//             return true
//         }
//     } return false
// }
// console.log(checkNull())

//===============№3===============

// let num = [1, 2, -3, 0, 4, -5, 6]
// function checkNull () {
//     for (let i = 0; i<num.length; i++) {
//         if(num[i]<0){
//             return true
//         }
//     } return false
// }
// console.log(checkNull())

//===============№4===============

// let arr = [1, 2, -3, 4, -5, 6];
// console.log( arr.filter(item => item < 0 ));

//===============№5===============
// function handleSum( arr) {
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             res.push(arr[i])
//         }
//     }return res
// }
// console.log(handleSum([1, 2, -3, 0, 4, 5, -6]));

//===============№6===============

// function handleSum( arr) {
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length > 5){
//             res.push(arr[i])
//         }
//     }return res
// }
// console.log(handleSum(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even' ]));

//===============№7===============

// function handleSum( arr) {
//     let res= 0
//     for(let i=0;i<arr.length;i++){
//         if(){
//             res.push(arr[i])
//         }
//     }return res
// }

//===============№8===============

// function myFunction(a,b){
//     let c = [...a, ...b]
//     return c
// }
//
// console.log(myFunction([1,2,3,4],['a','b','c','d']))

//===============№9===============
//  function myFunction(arr, str) {
//     return arr.concat(str)
//  }
//  console.log(myFunction([2, 3, 4, 5], 'hello world'))

//===============№10===============

// function myFunction(a,b){
//     let c = [...a, ...b]
//     return c
// }
//
// console.log(myFunction([2, 3, 4, 5],'hello world'))

//===============№11===============

// function myFunction(a,b){
//     let c = [...a, ...b, ...a]
//     return c
// }
//
// console.log(myFunction([2, 3, 4, 5],'hello world'))

//===============№12===============
function fizzBuzz(arr) {
    let res = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz");
        } else if (i % 3 === 0) {
            res.push("Fizz");
        } else if (i % 5 === 0) {
            res.push("Buzz");
        } else {
            res.push(i);
        }
    }
    return res;
}

// Example usage:
console.log(fizzBuzz())




