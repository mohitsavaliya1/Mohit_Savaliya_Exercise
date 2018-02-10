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

/*--------------------------------------------------------------------------------------*/

console.log(people.person);