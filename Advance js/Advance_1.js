
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



/*--------------------------------------------------------------------------------------*/
/*initializing students*/

let studentObj = new Student();

let John = { name: "john", class: 7, age: 12, email: "john@gmail.com"};
studentObj.student = John;

let Tapu = {name: "tapu",class: 8,age: 13,email: "tapu11@gmail.com" };
studentObj.student = Tapu;

let Sonu = {name: "sonu",class: 6,age: 11,email: "sonu91@gmail.com" };
studentObj.student = Sonu;

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



/*--------------------------------------------------------------------------------------*/

let Students = studentObj.student;

console.log(people.person);


