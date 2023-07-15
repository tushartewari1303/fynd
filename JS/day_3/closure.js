// // const outer=(a)=>{
// //     let b=10;
// //     const inner=()=>{
// //         let sum=a+b;
// //         console.log('the sum is ',sum);
// //         console.dir();
// //     }
// //      inner()
// // }
// // outer(7)


// function x(){
//     var a=7;
//     function y() {
//         console.log(a);

//     }
// y();
// }
// x();
// // let data=outer(6);
// // console.log(data);
// // let a=9;
// // const show=()=>{
// //     console.log(a);
// // }
// // show()




// function outerFunction() {
//     var outerVariable = 'Hello';
  
//     function innerFunction() {
//       var innerVariable = 'World';
//       console.log(outerVariable + ' ' + innerVariable);
//     }
  
//     return innerFunction;
//   }

// var closure = outerFunction();
// console.dir(closure);
// closure();
  let a=9;
function outer(){
    console.log(a);
}
  var closure = outer();
  console.dir(closure);
  closure();