// const event=require('events');  //creating a class events
// const EventEmitter=new event.EventEmitter(); //EventEmiiter object of class event

const EventEmiiter=require('events'); //class bnai
const event=new EventEmiiter(); //object bnaya EventEmitter class ka

//defining an event
event.on('sayName',()=>{   //("event a naam jo emit me likha",call back)
    console.log("naam kya hai")
});
//registring to event
event.on('sayName',(msg)=>{
    console.log(msg);
})
//to call a event
event.emit('sayName',"hello");