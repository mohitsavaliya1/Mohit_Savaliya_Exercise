let num = prompt("enter a number");


let chop = function(str,i){
	let arr = [];
	let mod = str.length % i;
	let x = mod;
	let len = str.length;
	if(mod!=0)	arr.push(str.substring(0,mod));
	while(x<=len){
		let z = x + i;
		let sub = str.substring(x,z);
		arr.push(sub);
		x = x+i;
	}

	return arr;
}

let join = (arr) => {
	let str = arr.join(',');
	
	return str;
}

let arr = chop(num,3);
let str2 = join(arr).slice(0,this.length -1);

alert(str2);
