function Person(name) {
	
}
Person.prototype.constructor = function(){
	this.personName = name;
};


let people1 = new Person("Kaka");

console.log(people1.constructor);





