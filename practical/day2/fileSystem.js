const fs=require('fs');
//for synchronous file
//creating new file
fs.writeFileSync('readFile.txt',"creating file with fs.writeFileSync(jaha file bnani ho uska ath and name,andar a dat");


//check if it overwrites data or append
fs.writeFileSync('readFile.txt',"dekho k"); //isne to over write kr diya

//ab hmko overwrite nhi krna blki append krana hai
fs.appendFileSync("readFile.txt","Yeh append ho gya");


//ab data read krna hai
fs.readFileSync(path,encoding);
const buffer_data_read=fs.readFileSync("readFile.txt");//bina encoding ke
console.log(buffer_data_read); //ut ptaang aaya 
const actual_data_read=fs.readFileSync("readFile.txt","utf-8");
console.log(actual_data_read)
fs.renameSync('oldpath','newpathh');
fs.renameSync("readFile.txt","renameFile.txt");
