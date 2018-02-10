
class Person {
	constructor(){
		this.persons = [];
	}

	set person(personObj){
		this.persons.push(personObj);
	}

	get person(){
		return this.persons;
	}
}

let people = new Person();

class Student extends Person{
	constructor(){
		super();
		this.students = [];
	}

	set student(studentObj){
		this.students.push(studentObj);
		people.person = studentObj;
	}

	get student(){
		return this.students;
	}
}

class Profesor extends Student{
	constructor(){
		super();
		this.profesors = [];
	}

	set profesor(profesorObj){
		this.profesors.push(profesorObj);
		people.person = profesorObj;
	}

	get profesor(){
		return this.profesors;
	}
}


/*--------------------------------------------------------------------------------------*/
/*initializing students*/

let studentObj = new Student();

let John = { name: "john", class: 7, age: 12, email: "john@gmail.com"};
studentObj.student = John;

let Tapu = {name: "tapu",class: 8,age: 13,email: "tapu11@gmail.com" };
studentObj.student = Tapu;

let Sonu = {name: "sonu",class: 6,age: 11,email: "sonu91@gmail.com" };
studentObj.student = Sonu;

let Ramesh = {name: "ramesh",class: 7,age: 12,email: "ramesh@gmail.com"};
studentObj.student = Ramesh;

let Gogi = {name: "gogi",class: 8,age: 13,email: "gogi123@gmail.com"};
studentObj.student = Gogi;

let Goli = {name: "goli",class: 6,age: 11,email: ""};
studentObj.student = Goli;

let Vraj = {name: "vraj",class: 10,age: 15,email: ""};
studentObj.student = Vraj;

let Kaka = {name: "kaka",class: 7,age: 12,email: "kaka11@gmail.uk.com"};
studentObj.student = Kaka;



/*initializing Profesors*/

let profesorsObj = new Profesor();

let Kunj = {name: "kunj",class: 6,age: 45,email: "kunj@school.ac.in"};
profesorsObj.profesor = Kunj;

let Kavita = {name: "kavita",class: 8,age: 39,email: "kavita@school.ac.in"};
profesorsObj.profesor = Kavita;




let Dhaval = {name: "Dhaval",class: 7,age: 12,email: "dhaval11@gmail.co.in"};
profesorsObj.student = Dhaval;

let Dhaval2 = {name: "Dhaval2",class: 7,age: 12,email: "dhaval1@gmail.co.in"};
profesorsObj.student = Dhaval2;

/*--------------------------------------------------------------------------------------*/

let Students = studentObj.student.concat(profesorsObj.student);

let Profesors = profesorsObj.profesor;

let SportsCommittee = [Kunj, Tapu, Ramesh, Vraj]; 
let cricket = [Sonu, Gogi, Goli, Dhaval];
let kabbadi = [Sonu, Tapu, Vraj, Dhaval];
let football = [Kaka, Dhaval]; 

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


/*--------------------------------------------------------------------------------------*/

/*console.log(people.person);
*/
let allUsers = people.person;


let passwords = new Map();


allUsers.forEach(user => {
	user.Password = user.name + '0';
	passwords.set(user.name,user.Password);
} );

Students.forEach(user => user.isAuthorised = false);
Profesors.forEach(user => user.isAuthorised = true);

let idOfPerson = 1;
allUsers.forEach(user => user.id = idOfPerson++);

let userObject = new Map();
allUsers.forEach(user => userObject.set(user.name,user));

/*--------------------------------------------------------------------------------------*/
let PrintArrayByName = function(arr){
	arr.forEach(element => console.log(element.name));
}

function shuffleArray(array) {
   array.sort(() => Math.random() - 0.5);
}

/*--------------------------------------------------------------------------------------*/
/*Sports committee students = sports committee - profs*/

let SportsCommitteeStudents = function(Students,SportsCommittee){
	return SportsCommittee.filter(x => Students.includes(x));
	
}

/*console.log(SportsCommitteeStudents(Students,SportsCommittee));*/
/*--------------------------------------------------------------------------------------*/
/*n is no.of students*/


let compareById = function(a,b){
	return a.id>b.id;
}


let firstNStudents = function(Students,n){
	if(n>Students.length || n<0){
		alert("n is not valid");
		return;
	}
	else{
		Students.sort(compareById);

		for(let i=0;i<n;i++){
			console.log (Students[i].name + " : id : " + Students[i].id);
		}
	}
}

let lastNStudents = function(Students,n){
	if(n>Students.length || n<0){
		alert("n is not valid");
		return;
	}
	else{
		Students.sort(compareById);
		n = Students.length - n;
		for(let i=Students.length-1;i>=n;i--){
			console.log (Students[i].name + " : id : " + Students[i].id);
		}
	}
}

/*firstNStudents(Students,5);
lastNStudents(Students,3);*/


/*--------------------------------------------------------------------------------------*/
/*most frequent item in array*/
let MostActivePlayer = function(...args){
	let len = args.length;
	let allPlayers = args[0];
	for(let i=1;i<len;i++){
		allPlayers = allPlayers.concat(args[i]);
	}	
	

	let map = new Map();
	let max = 1;
	let mostActive = allPlayers[0].name;


	allPlayers.forEach(player => {
		
		if(map.has(player.name)){

			let val = map.get(player.name);
			map.set(player.name,val+1);
			if(max<(val+1)){
				max = val+1;
				mostActive = player.name;
			}
		}
		else{
			map.set(player.name,1);

		}
	})

	console.log(mostActive);

}

/*MostActivePlayer(football,cricket,kabbadi);
*/
/*--------------------------------------------------------------------------------------*/
let emailsForAuthorisedUser = function(allUsers){
	let emails = [];
  	for(let x of allUsers){	
  		if(x.email.match(/@(\w+\.)+\w+/)!=null)
  		emails.push(x.name + " : " +x.email); 		
	}
	
	emails.forEach(mail => console.log(mail));
}

let emailsForUnauthorisedUser = function(allUsers){
	let emails = [];
  	for(let x of allUsers){	
  		if(x.email.match(/@(\w+\.)+\w+/)!=null){
  			let split = x.email.split('@');
  			let diffrentMail = split[0].substring(0,3) + "...@" + split[1]; 	
  			emails.push(x.name + " : " +diffrentMail); 	
  		}	
	}
	
	emails.forEach(mail => console.log(mail));
}


/*let login = confirm("Wants to log in?");
	if(login){
		let userName = prompt("Enter userName");
		let PassWord = prompt("Enter password");

		let truePassword = passwords.get(userName);
		
		if(PassWord === truePassword){
			alert("Loged in succesfully");

			if(userObject.get(userName).isAuthorised){
				console.log("You are Authorised");
				let msg = confirm("Wants to see E-mails?");
				if(msg){
					emailsForAuthorisedUser(allUsers);
				}
			}
			else{
				console.log("You are Un-Authorised");
				let msg = confirm("Wants to see E-mails?");
				if(msg){
					emailsForUnauthorisedUser(allUsers);
				}
			}

		}
		else{
			console.log("Wrong password or Username");
		}
	}*/
/*--------------------------------------------------------------------------------------*/


let sortByAge = function(userArray){
	return userArray.sort((a,b) =>  a.age - b.age);
}



let compareByName = function(a,b){
	if(a.name > b.name)	return 1;
	if(a.name < b.name) return -1;
	return 0;
}

let sortByName = function(userArray1){
	return userArray1.sort(compareByName);
}






/*--------------------------------------------------------------------------------------*/
let amountInThousandSaprator = function(amount){
	
	let arr = [];
	let strOfAmount = JSON.stringify(amount);

	let mod = strOfAmount.length % 3;
	let modCopy = mod;
	let len = strOfAmount.length;
	if(mod!=0)	arr.push(strOfAmount.substring(0,mod));

	while(modCopy<=len){
		let z = modCopy + 3;
		let sub = strOfAmount.substring(modCopy,z);
		arr.push(sub);
		modCopy = modCopy + 3;
	}

	let join = (arr) => {
		let str = arr.join(',');
		return str;
	}

	let thousandSepratorAmount = join(arr).slice(0,this.length -1);

	console.log(thousandSepratorAmount);
}

/*amountInThousandSaprator(5000000);*/
/*
John.fees = 5000001546;
amountInThousandSaprator(John.fees);*/

/*Amount in dash between two even numbers. num is a string*/
let amountIndash = function(num){
	
	for(let x=0;x<num.length-1;x++){
		if(num[x] === '-') continue;

		let a = parseInt(num[x]);
		let b = parseInt(num[x+1]);
		if(a%2 === 0 && b%2 === 0){
			num = num.substring(0,x+1) + '-' + num.substring(x+1,num.length);
		}
	}

	if(num[num.length-1] === '-'){
		num = num.substring(0,num.length-1);
	}


	console.log(num);
}
/*John.fees = prompt("Enter John fees");
amountIndash(John.fees);*/
/*--------------------------------------------------------------------------------------*/

/*chopName function convers name into [na, me] if chopNumber is 2*/
let chopName = function(name,chopNumber){
	let chop = [];
	let x = 0;
	let len = name.length-1;
	
	while(x<=len){
		let chopStr = x + chopNumber;
		let sub = name.substring(x,chopStr);
		chop.push(sub);
		x = x + chopNumber;
	}

	console.log(chop);
}

/*chopName("mohit",2);*//* output - mo,hi,t */

/*--------------------------------------------------------------------------------------*/

let deleteObject = function(obj,arr){
	let x = arr.indexOf(obj);
	arr.splice(x,1);
}

let addObjAtPos = function(pos,obj,arr){
	arr.splice(pos,0,obj);
}

/*deleteObject(John,Students);
console.log(Students.length);
addObjAtPos(1,John,Students);
console.log(Students.length);
*/

/*--------------------------------------------------------------------------------------*/

/*Set Hobbies*/
Students.forEach(student => student.Hobby= []);

Students.forEach(student => student.Hobby.push("cricket"));

let count = 0;
for(let x of Students){
	x.Hobby.push("football");
	count++;
	if(count==5) break;
}
count = 0;
for(let x of Students){
	x.Hobby.push("kabbadi");
	count++;
	if(count==3) break;
}

/*console.log(Students);
*/
/*Name according to Hobbies*/
let nameByHobbies = function(students){
	let hobbies = [];
	let map = new Map();
	let count = 0;
	let val = 0;

	for(let x=0;x<students.length;x++){
		
		let len = students[x].Hobby.length;
		
		for(let i=0;i<len;i++){

			let hob = students[x].Hobby[i];
			
			if(map.has(hob)){
				val = map.get(hob);
				hobbies[val].push(students[x].name);
			}
			
			else{
				map.set(hob,count);
				hobbies[count] = [];
				hobbies[count].push(hob);
				hobbies[count].push(students[x].name);
				count++;
			}
		
		}

	}

	for(let x of hobbies){
		console.log(x[0] + ": [" + x.slice(1,x.length) + "]");

	}
	
}




/*--------------------------------------------------------------------------------------*/

let date1 = new Date("2002-02-01"); 
John.dateOfBirth = date1;

let monthOfBirthDate = function(date){
	console.log(monthNames[date.getMonth()]);
} 



/*--------------------------------------------------------------------------------------*/

let date2 = new Date("2004-08-03");
Sonu.dateOfBirth = date2;

let diffinyear = function(date1,date2){
	let year = Math.abs(date2.getYear() - date1.getYear());
	return year;
}

let diffinMonth = function(date1,date2){
	let month = Math.abs(date2.getMonth() - date1.getMonth());
	return month;
}

let diffinDays = function(date1,date2){
	let days = Math.abs(date2.getDate() - date1.getDate());
	return days;
}




/*console.log(diffInDate(date1,date2));*/


let diffinTotalmonth = function(date1,date2){
	
	let oneMonth = 30*24*60*60*1000;
	let months = Math.floor(Math.abs((date2.getTime() - date1.getTime())/(oneMonth)));
	return months;
}

/*console.log(diffinTotalmonth(date1,date2));
*/


let diffinTotalday = function(date1,date2){
	let oneDay = 24*60*60*1000;
	let diffDays = Math.floor(Math.abs((date2.getTime() - date1.getTime())/(oneDay)));
	return diffDays;

}


let diffinTotalhour = function(date1,date2){
	let onehour = 60*60*1000;
	let diffhour = Math.floor(Math.abs((date2.getTime() - date1.getTime())/(onehour)));
	return diffhour;

}

let diffinTotalmin = function(date1,date2){
	let onemin = 60*1000;
	let diffmin = Math.floor(Math.abs((date2.getTime() - date1.getTime())/(onemin)));
	return diffmin;

}

let diffInDate = function(date1,date2){
	let mill = Math.abs(date2 - date1);
	let days = diffinTotalday(date1,date2);
	let month = diffinTotalmonth(date1,date2);
	let year = Math.floor(month/12);
	days = Math.floor(days/30.5);
	month = month %12;

	console.log(days + ' ' + month + ' ' +year);
}



/*--------------------------------------------------------------------------------------*/
let run = function(authorization){
				console.log("1 - E-mails of all users");
				console.log("2 - all people");
				console.log("3 - SportsCommitteeStudent");
				console.log("4 - firstNStudents");
				console.log("5 - lastNStudents");
				console.log("6 - MostActivePlayer");
				console.log("7 - sortByAge");
				console.log("8 - sortByName");
				console.log("9 - amountInThousandSaprator");
				console.log("10 - amountIndash");
				console.log("11 - chopName");
				console.log("12 - deleteObject");
				console.log("13 - addObjAtPos");
				console.log("14 - nameByHobbies");
				console.log("15 - monthOfBirthDate");
				console.log("16 - diffInDate");


				let msg = +prompt("Enter index");
				if(msg === 1 && authorization){
					emailsForAuthorisedUser(allUsers);
				}
				if(msg === 1 && !authorization){
					emailsForUnauthorisedUser(allUsers);
				}
				if(msg === 2){
					console.log(allUsers);
				}
				if(msg === 3){
					console.log(SportsCommitteeStudents(Students,SportsCommittee));
				}
				if(msg === 4){
					const N = +prompt("Enter n");
					firstNStudents(Students,N);
				}
				if(msg === 5){
					const N = +prompt("Enter n");
					lastNStudents(Students,N);
				}
				if(msg === 6){
					MostActivePlayer(football,cricket,kabbadi);
				}
				if(msg === 7){
					const xyz = sortByAge(Students);
					console.log('By Age : ', JSON.parse(JSON.stringify(xyz)));
				}
				if(msg === 8){
					const abc = sortByName(Students);
					console.log('By Name : ', JSON.parse(JSON.stringify(abc)));
				}
				if(msg === 9){
					const N = +prompt("Enter Amount");
					amountInThousandSaprator(N);
				}
				if(msg === 10){
					const N = prompt("Enter Amount");
					amountIndash(N);
				}
				if(msg === 11){
					const name = prompt("Enter Name");
					const N = +prompt("Enter chop-Number")
					chopName(name,N);
				}
				if(msg === 12){
					const name = prompt("Enter Student Name to delete it's object");
					let obj = userObject.get(name);
					deleteObject(obj,Students);
					console.log(`Total Students after delete ${name}`, Students.length);
					
				}
				if(msg === 13){
					const name = prompt("Enter Student Name to Add it's object");
					addObjAtPos(1,John,Students);
					console.log("Total Students", Students.length);
				}
				if(msg === 14){
					nameByHobbies(Students);
				}
				if(msg === 15){
					monthOfBirthDate(John.dateOfBirth);
				}
				if(msg === 16){
					diffInDate(date1,date2);
				}
}


let login = confirm("Wants to log in?");
	if(login){
		let userName = prompt("Enter userName");
		let PassWord = prompt("Enter password");

		let truePassword = passwords.get(userName);
		
		if(PassWord === truePassword){
			alert("Loged in succesfully");

			if(userObject.get(userName).isAuthorised){
				console.log("You are Authorised");
				let authorization = true;
				let confirmMsg;
				do{
					run(authorization);
					confirmMsg = confirm("wants to add index?");
					
				}while(confirmMsg)
			}
			else{
				console.log("You are Un-Authorised");
				let authorization = false;
				let confirmMsg;
				do{
					run(authorization);
					confirmMsg = confirm("wants to add index?");					
				}while(confirmMsg)
			}

		}
		else{
			console.log("Wrong password or Username");
		}
	}


