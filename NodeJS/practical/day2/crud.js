const fs=require('fs');
//  create File
 fs.writeFileSync('create.txt',"File Created");

 // UPDATE
 fs.appendFileSync('create.txt'," data appended");

//  READ
 const data_read=fs.readFileSync('create.txt','utf-8');
 console.log("Read Data");
 console.log(data_read);

// RENAME
fs.renameSync("create.txt","crud.txt");

fs.writeFileSync("DeleteFile.txt","Type unlinkSync");
// DELETE
fs.unlinkSync('DeleteFile.txt');