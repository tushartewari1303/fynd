index.js
// const student=require('./second')
// const smartwork=require('./second1')

// console.log('Hellohgghfhgh');
// console.log(student);
// console.log(__filename);
// console.log(__dirname);
// console.log(smartwork.hardwork());
// console.log(smartwork[1]);
// console.log(exports,require,module,__filename,__dirname);



// //es6 file example
// const secondemo=require('./seconddemo.mjs')
// import simple2 from './seconddemo.mjs'
// function simple2(){
//     console.log('insdex file simple2');
// }
// import {simple,simple2,simple3} from './seconddemo.mjs'
import * as a2 from './seconddemo.mjs'
// import simple4 from './seconddemo.mjs'
// console.log(simple());
// console.log(simple2());
// console.log(simple3());

// console.log(simple4());

// console.log(a2.simple2());
// console.log(a2.studentdata);
// console.warn(a2.simple8());
// let a=99
console.warn(a);
console.log('hello');

secondemo.js
export function simple(){
    console.log('simple');
    return 99
}

export function simple3(){
    console.log('simple3');
    return 3
}
export function simple2(){
    console.log('simple2');
    return 789
}

export default function sample(){
    console.log('default function');
}

 export const studentdata={
    name:'Peter',
    uid:48,
    designation:'Spider Man'
}

// export {studentdata}



secon1.js
function smartwork(){
    console.log('Doing smartwork');
    return 0
}

function hardwork(){
    console.log('doing hardwork');
    return 1
}

let data={
    fname:'Peter',
    laname:'Parker'
}

// module.exports=smartwork;
// module.exports=hardwork;
// module.exports=data;


// module.exports=data,hardwork,smartwork
module.exports=[data,hardwork(),smartwork()]
// module.exports=hardwork()
// module.exports=smartwork()

// module.exports=[data,hardwork(),smartwork()]
// module.exports={data,hardwork,smartwork}

// module.exports=


