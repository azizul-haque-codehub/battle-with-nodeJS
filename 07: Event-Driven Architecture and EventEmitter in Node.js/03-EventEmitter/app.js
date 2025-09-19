import EventEmitter from 'events';

const emitter = new EventEmitter()
emitter.on("x",()=> {
    console.log("x is fired");
})
console.log("asdf");