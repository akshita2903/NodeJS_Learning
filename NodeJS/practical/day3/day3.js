const os=require('os');
//TO GET WHAT ARCHITECTURE YOU USING i.e 32 bit OR 64 bit
const arch=os.arch();
//console.log(arch);

//check amt of FREE MEMORY in system in bytes(RAM)
const freememe=os.freemem();
//console.log(`free  memory in bytes ${freememe}`);
//console.log(`free memory in gb ${freememe /1024/1024/1024}`);


//TOTAL MEMORY
const total_memory=os.totalmem();
// console.log(`total memory ${total_memory}`);
// console.log(`in gb is ${total_memory/1024 /1024 /1024}`);

//host name
// console.log(os.hostname());
// console.log(os.platform());

// --------------------------------------------------------------------------------------

const path=require('path');
const dir_name=path.dirname('D:\Nodejs_learning\practical\day3\day3.js');
console.log(`dir name ${dir_name}`);
const file_extension_name=path.extname('D:\Nodejs_learning\practical\day3\day3.js');
console.log(file_extension_name);
const file_ka_name=path.basename("D:\Nodejs_learning\practical\day3\day3.js");
 console.log(file_ka_name);

// ------------------------------------------------------------------------------------------------

