let arr1 = [{
	id:1,
	name: 'abc',
	age: 25,
	hobbies:['traveling','reading','draving']
},
{
	id:2,
	name: 'xyz',
	age:23,
	hobbies:['traveling','reading','music']
}];

let arr = [];


let map = new Map();
let count = 0;
let val = 0;

for(let x=0;x<arr1.length;x++){
	let len = arr1[x].hobbies.length;
	
	for(let i=0;i<len;i++){
		let hob = arr1[x].hobbies[i];
		if(map.has(hob)){
			val = map.get(hob);
			arr[val].push(arr1[x].name);
		}
		else{
			map.set(hob,count);
			arr[count] = [];
			arr[count].push(hob);
			arr[count].push(arr1[x].name);
			count++;
		}
	}

}

alert(arr);