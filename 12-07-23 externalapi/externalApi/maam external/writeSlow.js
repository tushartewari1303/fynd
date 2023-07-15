const fs=require('fs')
// const data=['name,cost'];
// for(let i=0;i<10;i++){
//     data.push(`${i},2`)
// }
// console.log(data);
// console.log(typeof(data));
// console.log(data.join('\n'));
// console.log(data.join('\t'));

// console.log(typeof(data.join('\t')));
// fs.writeFileSync('stream/Data1.csv',data.toString())
// fs.writeFileSync('stream/Data1.csv',data.join('\n'))




const data=['name,cost'];
for(let i=0;i<1e8;i++){
    data.push(`${i},1`)
}

fs.writeFile('stream/Data1.csv',data.join('\n'))