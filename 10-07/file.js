const fs =require('fs');

// fs.readFile('file1.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// console.log('finished')
//===================
//====================

// not workokng

//Multiple file read.
// const a=['file1.txt','file2.txt'];
// a.forEach((a)=>{
//     fs.readFileSync(a,'utf-8',(err,data)=>{
//         console.log(data);
//     })
// })

// console.log('File finished');


//================================================= by promise maam

// function readData(filename){
//     return new Promise(function (resolve,reject){
//         fs.readFile(fileName,'utf-8',function(err,data){
//             if(err){
//                 reject()
//             }
//             else{
//                 reolsve()
//             }
//         })

//         promiseHooks.all([readData('file1.txt'),readData('file2.txt')])
//         .then (function(data){
//             console.log(data[1]);
//         })
//     })
// }

//===========================sachin

const files = ['file1.txt', 'file2.txt'];
  
  files.forEach((file) => {
      const data = fs.readFile(file, 'utf8',(err,data)=>{
        if(file == 'file1.txt'){
        console.log(`Contents of ${file}:`);
        console.log(data);
        console.log('---------------------------');
        }
      });
      console.log(data)
  });



  // Ma'am code
  /*


  const { log } = require('console');
const fs=require('fs');


//example-1
//asynchronous 
// fs.readFile('file1.txt','utf-8',(err,data)=>{
//     // console.log(typeof(data));
//     console.log(err,data);
//     // console.log(data.toString());
// })
// console.log('Finished Reading');


//example-2
//synchronous
// const a=fs.readFileSync('file1.txt','utf-8') 
// console.log(a);


// read multiple files simultaneoulsy
// way-1
// function readData(fileName){
//     return new Promise(function(resolve,reject){
//         fs.readFile(fileName,'utf-8',function(err,data){
//             if(err){
//                 reject()
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// Promise.all([readData('file1.txt'),readData('file2.txt')]).then(function(data){
//     console.log(data);
// }).catch((e)=>console.log(e.message))


// way-2
// const files=['file1.txt','file2.txt']

// files.forEach((file)=>{
//     const data=fs.readFileSync(file,'utf-8')
//     console.log(`contents of ${file}`);
//     console.log(data);
//     console.log('---------------');
// })


// way-3
// const files=['file1.txt','file2.txt']

// files.forEach((file) => {
//     const data = fs.readFile(file, 'utf8',(err,data)=>{
//       if(file == 'sachin1.txt'){
//       console.log(`Contents of ${file}:`);
//       console.log(data);
//       console.log('---------------------------');
//       }
//     });
//     console.log(data);  //it will give undefined bcz readFile, but will work in readFileSync
// });

// way-4
// const files=['file1.txt','file2.txt']

// for (let file of files) {
//     const data = fs.readFileSync(file, 'utf-8');
//     console.log(data);
//     console.log('--------------------------------------');
// }


// way-5
// async function readFiles(files) {
//     const results = await Promise.allSettled(files.map(file=> fs.readFile(file,'utf-8')));
//     for(res of results){
//     if (res.status === "fulfilled")
//     console.log("Fulfilled: ", res.value );
//     else
//     console.log("Rejected: ", res.reason )
// }
    
//     return results;
// }

// readFiles(['myfile1.txt', 'myfile2.txt']);

// way-6
// var ignores = ['file1.txt']
// function readMohitsFiles(...filePaths) {
//   filePaths.forEach((filePath) => {
//     try {
//       const fileContent = fs.readFileSync(filePath, 'utf-8');
//       if(ignores.includes(filePath))
//       {
//         filess=false;
//       }
//       else
//       {
//         console.log(fileContent);
//       }
//     } catch (err) {
//       console.log( err);
//     }
//   });
// }
// readMohitsFiles('file1.txt', 'file2.txt', 'file3.txt');

// way-7
const files = ["myfile.txt","myfile2.txt","myfile3.txt"];
// var i = 0;
files.forEach((file,i)=>{
    if(i==1){
        const a = fs.readFileSync(file,'utf-8');
        console.log(a);
        console.log('------------------------');
    }
    // i++;
});


//write file 
// fs.writeFile('file3.txt','This is fs module',(err,data)=>{
//     console.log(err,data);
// })
// console.log('finished writing');


// fs.writeFileSync('file3.txt','This is fs module sync')
// console.log('finished writing');



// fs.appendFile('file3.txt','This is appended text',()=>{
//     console.log('Data is writing');
// })

// console.log('finished writing');


// fs.appendFileSync('file3.txt','This is appended text in synchronous')

// console.log('finished writing');


//create folder
// fs.mkdir('datafile',()=>{
//     console.log('creating file');
// })


//delete folder
// fs.rmdir('datafile.txt',()=>console.log('deleting folder'))

//delete file
// fs.unlink('file3.txt',()=>console.log('deleting folder using unlink'))


//file rename
// fs.rename('file2.txt','fileTwo.txt',()=>{return 9})
// fs.rename('file2.txt','fileTwo.txt',()=>{console.log('Renaiming FIle')})
// fs.rename('datafile','datafileRename',()=>{console.log('Renaiming Folder')})



// create multiple files together
// var i;
// for(i=0;i<10;i++){
//     fs.writeFileSync(`file${i}.txt`,`This is File ${i}`)
//     console.log(i);
//     // console.log('file'+[i]+'creating');
// }


//chat gpt code for creation of multiple files
// const fileNames = ['file1.txt', 'file2.txt', 'file3.txt'];

// // Use a for loop to iterate over the file names
// for (let i = 0; i < fileNames.length; i++) {
//   const fileName = fileNames[i];

//   // Use the fs.writeFile method to create a new file with the current file name
//   fs.writeFile(fileName, 'Hello, world!', (err) => {
//     if (err) throw err;
//     console.log(`${fileName} has been created!`);
//   });
// }




// fs.copyFile("example_file.txt", "copied_file.txt", (err) => {
    
// }) */