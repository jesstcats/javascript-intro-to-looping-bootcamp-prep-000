/*for (var x = 1; x < 50; x++) {
  console.log("hello world");
  x;
  console.log(x);
}*/

//var array = [];

/*function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

forLoop([]);

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

whileLoop(10);*/

function maybeTrue() {
  return Math.random() >= 0.5;
}

var array = [1,2,3];

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0); //&& maybeTrue());
  return array;
}

doWhileLoop(array);
