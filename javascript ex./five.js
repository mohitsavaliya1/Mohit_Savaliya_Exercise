let arr = [12,56,2,3,2,4,8,5,9,6,54];

let arr2 = [5,3,6,9,2,4,5,12];

//---------------------------------------------------

alert("union of two arrays");
let ar = '[' + arr + ',' + arr2 + ']';

let union = JSON.parse(ar);

alert(union);
/*
let arr1 = [1,2,3,4];
let arr2 = [4,5,6];

alert(arr1.concat(arr2));*/

//----------------------------------------------------
alert("sub. of two arrays");

let map = new Map();
let newarr = [];
for(let x of arr){
	if(map.has(x)){
		let val = map.get(x);
		map.set(x,val+1);
	}
	else{
		map.set(x,1);
	}
}

for(let y of arr2){
	if(map.has(y)){
		let val = map.get(y);
		val--;
		if(val!=0){
			map.set(y,val);
		}
		else{
			map.delete(y);
		}
	}
	else{
		newarr.push(y);
	}
}

for(let i of map.keys()){
	let va = map.get(i);
	for(let j=0;j<va;j++){
		newarr.push(i);
	}
}

alert(newarr);

/*let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = [9,8,7,4,5,6,44,55,77]
let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));

alert(difference);

*/
