let map = new Map();
map.set("mohit","mohit");
map.set("rte","rte");

let gmailforauthorised = function(str){
	let arr = str.split(" ");
	let ans = [];
  	for(let x of arr){	
  		if(x.match(/@(\w+\.)+\w+/)!=null)
  		ans.push(x);
	}
	return ans;
}
let gmailforunauthorised = function(str){
	let arr = str.split(" ");
	let ans = [];
  	for(let x of arr){	
  		if(x.match(/@(\w+\.)+\w+/)!=null){}
  		else ans.push(x);
	}
	return ans;
}

let user = prompt("Enter user name");
let pass = prompt("Enter password");


if(map.has(user)){
	let pa = map.get(user);
	if(pa == pass){
		alert("authorised");
		alert(gmailforauthorised("abc@gmail.com.uk tata tatabye@gmail.com"));
	}
	else{
		alert("Unauthorised");
		alert(gmailforunauthorised("abc@gmail.com.uk tata tatabye@gmail.com"));

}
	
}

else{
		alert("Unauthorised");
		alert(gmailforunauthorised("abc@gmail.com.uk tata tatabye@gmail.com"));

}
