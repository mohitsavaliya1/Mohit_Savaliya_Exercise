let remxml = function(str){
	/*if ((str===null) || (str===''))
       return false;
	else
	   str = str.toString();*/
  return str.replace(/<[^>]+>/g, '');
	
}

alert(remxml("<p><strong><em>hey there</em></strong></p>"));

























/*
let ind1 = 0;
	let ind2 = 0;

	let ind11 = false;
	let ind22 = false;
	let first = 0;

	for(let char=0; char<str.length ;char++){
		
		if(str[char]=='<'){
			ind1 = char;
			ind11 = true;
			first = char;
		}
		else if(str[char]=='>'){
			ind2 = char;
			ind22 = true;
		}
		if(ind11 && ind22){
			let sub = str.substring(ind1,ind2+1);
			str.replace(sub,"");
			alert(str);
			ind11 = false;
			ind22 = false;
			char = first;
		}
		
	}
	alert(str);	*/
