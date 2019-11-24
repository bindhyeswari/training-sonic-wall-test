function test(...args) {
  // args is an array
  console.log(Array.isArray(args));
  console.log(args);
}

function data() {
  const keys = Object.keys(arguments);
  console.log('keys: ', keys);
  console.log('looping using in ... ');
  for (let prop in arguments) { // in for objects
    console.log(prop);
  }
  // will this code run?
  for (let val of arguments) {
    console.log(val);
  }
}

data(100,20,30);

test(10, 20, 30, 40);
