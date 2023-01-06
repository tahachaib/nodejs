const fs = require('fs');
const readStream = fs.createReadStream('./blog.txt');
const writeStream=fs.createWriteStream('blog2.txt');
readStream.on('data',(chunk)=>{
    console.log("--------Loading--------");
    console.log(chunk.toString());
    writeStream.write('\nNew chunk\n');
    writeStream.write(chunk);
})

readStream.pipe(writeStream);