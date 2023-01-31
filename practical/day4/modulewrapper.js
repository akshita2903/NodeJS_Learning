// (function()
// {

// })   //iske anadar saare cheeze ka scope private hai
// (function (exports, require, module, __filename, __dirname) {
//     //module code
//   });


const log=console.log;
log("Hellow");


(
function(){
  var name="Aks";
  log(name);
})();

// log(name); //yaha per name can not be used kyunki iska scope private ho gya uper wale iife me
