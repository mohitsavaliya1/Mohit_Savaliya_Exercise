let chop = function(str,i){
	let arr = [];
	let x = 0;
	let len = str.length;
	
	while(x<=len){
		let z = x + i;
		let sub = str.substring(x,z);
		arr.push(sub);
		x = x+i;
	}

	alert(arr);
}

/*let str = prompt("enter a string");
let num = +prompt("enter num for chop");*/
chop("mohit",2);