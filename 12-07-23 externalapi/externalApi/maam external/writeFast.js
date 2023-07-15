const fs=require('fs');

(async()=>{
    const writeStraem=fs.createWriteStream('Data1.csv')
    for(let i=0;i<1e8;i++){
        const datalarge=writeStraem.write(`${i},1\n`);
        if(!datalarge){
            await new Promise((resolve)=>writeStraem.once('drain',resolve))
        }
    }
    writeStraem.end()
})()