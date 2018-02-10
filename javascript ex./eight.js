let d1 = prompt("enter date1 in YYYY-MM-DD form");
let d2 = prompt("enter date2 in YYYY-MM-DD form");

let date1 = new Date(d1);
let date2 = new Date(d2);

let diff = function(date1,date2){
	return date2 - date1;
}

alert("diff in ms");
alert(diff(date1,date2));

alert("diff in year");

let diffinyear = function(date1,date2){
	return date2.getYear() - date1.getYear();
}

alert(diffinyear(date1,date2));