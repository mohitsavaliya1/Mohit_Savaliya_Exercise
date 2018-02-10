let one = {
	id: 1,
	name: 'one',
	age: 26
};
let two = {
	id: 2,
	name: 'two',
	age: 44
};
let three = {
	id: 3,
	name: 'three',
	age: 23
};
let four = {
	id: 4,
	name: 'four',
	age: 4
};
let five = {
	id: 5,
	name: 'five',
	age: 98
};

let arr = [one, two, three, four, five];
//-------------------------------------------------------------
let del = function(obj,arr){
	let x = arr.indexOf(obj);
	arr.splice(x,1);
}

del(one,arr);

console.log(arr.length);
for(let x of arr){
		console.log(x.name);
}
let str = JSON.stringify(arr);
console.log(str);
//-------------------------------------------------------------
let posadd = function(pos,obj,arr){
	arr.splice(pos,0,obj);
}

posadd(2,one,arr);
console.log(arr.length);
for(let x of arr){
		console.log(x.name);
}
let str2 = JSON.stringify(arr);
console.log(str2);


	
