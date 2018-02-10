let arr = [12,56,2,3,2,4,8,5,9,6,54];

let shuffle = function(){
	let x = arr.pop();
	arr.unshift(x);
	alert(arr);
}

shuffle();
shuffle();

/*function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
*/