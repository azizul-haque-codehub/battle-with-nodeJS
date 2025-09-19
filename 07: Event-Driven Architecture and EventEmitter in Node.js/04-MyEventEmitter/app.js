class MyEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, callback) {
    !this._events[eventName]
      ? (this._events[eventName] = [])
      : this._events[eventName].push(callback);
  }

  emit(eventName) {
    this._events[eventName].forEach((ele) => {
      ele();
    });
  }
}

const emitter = new MyEmitter();

emitter.on("x", () => {
  console.log("x event handler");
});
emitter.on("x", () => {
  console.log("x event handler 2");
});

emitter.on("y", () => {
  console.log("y event handler");
});

console.log(emitter);

emitter.emit("x");
