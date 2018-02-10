
let num_string_range = function(char1,char2,i){
	let arr = [];
	
	let num = char1.charCodeAt(0);
	let num2 = char2.charCodeAt(0);

	let char = char1;
	arr.push(char);
	let x = num;
	
	while(true){	
		x = x + i;
		if(x<=num2){
			char = String.fromCharCode(x);
			arr.push(char);
		}
		else{
			break;
		}	
	}

	alert(arr);

}

num_string_range('e','x',2);