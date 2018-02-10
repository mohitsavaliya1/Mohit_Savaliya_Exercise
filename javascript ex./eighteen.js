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
let arr2 = [one, two, three, four, five];

console.log("sort by age");
arr.sort((a,b) => a.age>b.age);
	for(let x of arr){
		console.log(x.name);
	}

console.log("sort by name");
arr2.sort((a,b) => a.name<b.name);
	for(let x of arr2){
		console.log(x.name);
	}
