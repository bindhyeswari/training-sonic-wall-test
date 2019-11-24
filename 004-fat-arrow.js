const getGlobalObject = function () {
  // IIFE function to return the global context / global object
  let global;
  (function () {
    global = this;
  }());
  return global;
};

const x = {
  name: 'Jane Doe',
  sayHello: () => { // This will give you undefined
    console.log(this.name);
    console.log(this === getGlobalObject());
  }
};

x.sayHello();
