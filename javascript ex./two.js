let num = prompt("enter a number");

let num2 = +num;
if(num2%2!=0)	alert(num);
else{
for(let x=0;x<num.length;x++){
	if(num[x] == '-') continue;

	let a = parseInt(num[x]);
	if(a%2==0){
		num = num.substring(0,x+1) + '-' + num.substring(x+1,num.length);
	}
}

if(num[num.length-1] == '-'){
	num = num.substring(0,num.length-1);
}


alert(num);

}
