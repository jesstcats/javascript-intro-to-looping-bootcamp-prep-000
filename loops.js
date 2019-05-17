function forLoop(array){
  for (var i = 0; i < array.length; i++){
    if(i = 1){
      console.log("I am 1 strange loop.");
  for (let i = 0; i < 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.");
    }
    else{
      console.log("I am ${i} strange loop.");
      array.push("I am ${i} strange loop.");
    }
  }
  return array;
}

forLoop([1,2,3,4,5]);
function whileLoop(num){
	while (num > 0){
		console.log(--num);
	}
	return 'done';
}
function doWhileLoop(array){
	function maybeTrue() {
  return Math.random() >= 0.5
	}
	do {
		array.pop();
	} while(array.length > 0 && maybeTrue());
	return array;
