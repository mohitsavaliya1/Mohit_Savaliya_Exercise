let d1 = prompt("enter date1 in YYYY-MM-DD form");
let d2 = prompt("enter date2 in YYYY-MM-DD form");

let date1 = new Date(d1);
let date2 = new Date(d2);

let diff = function(date1,date2){
	return date2 - date1;
}

alert("diff in ms");
alert(diff(date1,date2));

//-------------------------------------------------------
alert("diff in year");

let diffinyear = function(date1,date2){
	return date2.getYear() - date1.getYear();
}

alert(diffinyear(date1,date2));

//---------------------------------------------------------
alert("diff in month");

let diffinmonth = function(date1,date2){

	 let m2 = date2.getMonth();
	  
	 let year = diffinyear(date1,date2);
     year -= 2;
	 let m1 = date1.getMonth();
	 m1 = 11-m1;
	 return m1 + year*12 + m2;
}

alert(diffinmonth(date1,date2));

//------------------------------------------------------

alert("diff in day");

let diffinday = function(date1,date2){
	let oneDay = 24*60*60*1000;
	let diffDays = Math.round(Math.abs((date2.getTime() - date1.getTime())/(oneDay)));
	return diffDays;

}

alert(diffinday(date1,date2));
//---------------------------------------------------------
alert("diff in hour");

let diffinhour = function(date1,date2){
	let onehour = 60*60*1000;
	let diffhour = Math.round(Math.abs((date2.getTime() - date1.getTime())/(onehour)));
	return diffhour;

}

alert(diffinhour(date1,date2));
//------------------------------------------------------------

alert("diff in min");

let diffinmin = function(date1,date2){
	let onemin = 60*1000;
	let diffmin = Math.round(Math.abs((date2.getTime() - date1.getTime())/(onemin)));
	return diffmin;

} 

alert(diffinmin(date1,date2));
