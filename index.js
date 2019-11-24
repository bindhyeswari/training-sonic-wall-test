// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
// use ~~ instead of Math.floor
function test() {
  for (let i = 0; i < 100; i++) {
    // bind the function in setTimeout, or use IIFE, or pass as param
    const randomInterval = Math.floor(Math.random() * 500); // 0 to 500
    setTimeout(function () {
      // console.log(`Invoked after ${randomInterval} seconds. Loop variable is ${i}`);
    }, randomInterval); // 260
  }
  // run fibonacci calculation 30s
}

// setTimeout ->

// event loop = [instructionset1, function () {console.log}, .. . .. ]

test();

var x = 200;

function lexicalScopeExample() {
  var x = 30;
  return function () { // x -> 30
    return function () { // lexical scope
      console.log(x);
      x = 60;
      return 100;
    }
  }
}

const fnLevel1 = lexicalScopeExample();
const fnLevel2 = fnLevel1();
const fnLevel3 = fnLevel1();
console.log(fnLevel2());
console.log(fnLevel3());
