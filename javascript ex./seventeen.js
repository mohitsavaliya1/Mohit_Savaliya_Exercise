let y = prompt("write table row and column no. as (row col)")

let num = y.split(' ');
let r = +num[0];
let c = +num[1];

let arr = new Array(r);
for(let j=0;j<r;j++){
	arr[j] = new Array(c);
}

for(let i=0;i<(r*c);i++){
	let x = prompt("enter row and column no. and it's value AS (Row Col value)");
	let val  = x.split(" ");
	arr[+val[0]][+val[1]] = +val[2]; 
}

alert(arr[1][1]);