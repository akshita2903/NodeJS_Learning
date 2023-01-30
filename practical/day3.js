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
console.log(os.hostname());
console.log(os.platform());

// --------------------------------------------------------------------------------------