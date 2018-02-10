let gmail = function(str){
	let arr = str.split(" ");
	let ans = [];
  	for(let x of arr){	
  		if(x.match(/@(\w+\.)+\w+/)!=null)
  		ans.push(x);
	}
	return ans;
}

alert(gmail("abc@gmail.com.uk tata tatabye@gmail.com"));
