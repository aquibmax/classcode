// const eventEmitter = require('events')

// const newEvent = new eventEmitter.EventEmitter()

// const doorAnswer = function(){
//     console.log('Bell rang')
// }
// newEvent.on('Bell', doorAnswer)

// newEvent.emit('Bell')



// const myEmitter = new eventEmitter.EventEmitter();
// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this);
//   // Prints: a b {}
// });
// myEmitter.emit('event', 'a', 'b');


// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


const fs = require('fs')
// fs.stat('randomNum', (err,data)=>{
//     if(err) console.log(err);
//     else{
//         console.log(data);
//     }
// })

const readstream =  fs.createReadStream('randomNum');

function onOpen(param){
    console.log('FILE REDAING STARED');
}

readstream.on('open', onOpen)

readstream.on('ready',onOpen)
runner = 0;
onData = function(){
    runner ++;
    console.log(runner);
}

readstream.on('data', onData)
