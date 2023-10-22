const EventEmitter = require("events");
const http = require("http");

/************ this example shows how to use Event-Driven Architecture ****************/

const myEmitter = new EventEmitter();

// set up newSale event listener
// this one here(.on()) is the observer, it observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// we can set up multiple event listener for the same event
// this one here(.on()) is the observer, it observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

// this event listener takes the argument in emitter as an argument of its callback function
myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// make up an event name
// this one here(.emit()) is the object that emits the events
// we can even pass arguments to the EventListener by passing them as an additional arguments in the emitter
myEmitter.emit("newSale", 9);

/*********** to use Oberver Pattern in real life, its better to creat a new class that will actually inherit from node EventListener *********/
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// we can set up multiple event listener for the same event
// this one here(.on()) is the observer, it observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

// this event listener takes the argument in emitter as an argument of its callback function
myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// make up an event name
// this one here(.emit()) is the object that emits the events
// we can even pass arguments to the EventListener by passing them as an additional arguments in the emitter
myEmitter.emit("newSale", 9);

/******** this example demostrates by creating a samll web server  ******/

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request!");
});

server.on("close", () => {
  console.log("Server closed!");
});

// the application is not shutting down because the event loop is still waiting for incomming I/O
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});
