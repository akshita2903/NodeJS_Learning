const fs=require('fs');
const data={
    name:"Ak",
    hobby:"poetry writing",
    id:1
};
const json_data=JSON.stringify(data); //converts object to json_format 
// console.log(typeof(data));
// console.log(typeof(json_data));
// // console.log(typeof(JSON.parse(json_data)))
// console.log(json_data)
console.log(data.name);
// 1-ADD json_format to another file
// fs.writeFile('json_fo.json',json_data,(err)=>{
//     console.log("done")
// })

//2-Read the json_fo.json file
const jsn_read=fs.readFile('json_fo.json','utf-8',(err,data)=>{
   const object_format=JSON.parse(data);
   console.log(data);
   console.log(object_format);
});

