// IIFE context is global object

// Context for methods is the object they are invoked on
// y.sayHello()

// Global function has the context set to the global object
function test() {
  console.log(this);
}
test();

// new Keyword
function Person() {
  console.log(this);
  this.__myTestVar = 'fc4f9b07-ecaa-46de-b69e-22d8617821e3';
}
Person(); // this will point to global object as the context

const priya = new Person; // context is the newly created object : priya
console.log(priya);


