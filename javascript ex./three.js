let arr = [12,56,2,3,2,4,2,8,5,9,6,54];

let map = new Map();
let max = 1;
let maxkey = arr[0];

for(let x of arr){
	if(map.has(x)){
		let val = map.get(x);
		map.set(x,val+1);
		if(max<(val+1)){
			max = val+1;
			maxkey = x;
		}
	}
	else{
		map.set(x,1);
	}
}

alert(maxkey);