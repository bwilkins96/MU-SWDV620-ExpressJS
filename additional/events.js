// Event emitter practice

const EventEmitter = require('events');
const emmiter = new EventEmitter();

// Register a listener
emmiter.on('logging', (arg) => {
    console.log(arg.data);
})

// Raise logging event
emmiter.emit('logging', {data: 'hello world!'});