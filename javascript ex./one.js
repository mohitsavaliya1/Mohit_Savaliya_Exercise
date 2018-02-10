let arr = [12,56,2,3,2,4,8,5,9,6,54];

alert(arr[0]);
alert(arr[arr.length - 1]);

let n = +prompt("Enter n to get first and last n numbers");
let len = arr.length;

if(n>len || n<0){
	alert("n is not valid");
}
else{
	
	alert(`first ${n} elements`);
	for(let i=0;i<n;i++){
		alert(arr[i]);
	}

	alert(`last ${n} elements`);
	for(let j=len-1;j>n;j--){
		alert(arr[j]);
	}
}