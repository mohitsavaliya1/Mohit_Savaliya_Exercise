let Tapu = {firstName: "tapu",lastName: "khan",age: 18,skills: ['run', 'swim', 'dance'],gender: "male",married: false};
let Sonu = {firstName: "sonu",lastName: "khan",age: 17,skills: ['jump', 'run', 'dance'],gender: "female",married: false};
let Pinku = {firstName: "pinku",lastName: "hathi",age: 15,skills: ['jump'],gender: "male",married: true};
let Gogi = {firstName: "gogi",lastName: "hathi",age: 11,skills: ['run', 'dance'],gender: "male",married: false};

let Hans = {firstName: "hans",lastName: "khan",age: 58,skills: ['run', 'jump', 'swim', 'dance'],gender: "male",married: false,
	children : {
		tapu : Tapu,
		sonu : Sonu
	}
};
let Abdul = {firstName: "abdul",lastName: "hathi",age: 35,skills: ['swim', 'dance'],gender: "male",married: true,
	children : {
		gogi : Gogi,
		pinku : Pinku
	}
};

/*----------------------------------------------------------------------------------------------*/

let allPeople = [Tapu, Sonu, Pinku, Gogi, Hans, Abdul];
let adults = [Hans, Abdul];
let children = _.xor(allPeople,adults);

/*----------------------------------------------------------------------------------------------*/

//below thirty
let belowThirty = _.filter(allPeople,_.negate(function(n){ return n.age > 30; }));
console.log("below thirty", belowThirty);

//skilled with swim and run
let skilled = _.filter(belowThirty, ['skills', ['swim', 'run']]);
console.log("skilled with swim and run(below thirty)", skilled);

/*----------------------------------------------------------------------------------------------*/

let swimOrDanceChildren = _.filter(children,function(n){ return _.includes(n.skills, 'swim') || _.includes(n.skills, 'dance')});
console.log("swim Or Dance skilled Children", swimOrDanceChildren);

let sortTheseChildren = _.sortBy(swimOrDanceChildren, ['gender', 'age']);
console.log("sort by gender and age", sortTheseChildren);

/*----------------------------------------------------------------------------------------------*/

let allUser = _.concat(adults,children);
console.log("all people", allUser);

/*----------------------------------------------------------------------------------------------*/

//unmarried adults with daughter
let x = _.filter(adults, function(adult){return !adult.married; });
let y = _.filter(x, function(adult){ return _.forOwn(adult.children , function(value, key) { return value === 'female'} );});

console.log("unmarried adults with daughter", y);

/*----------------------------------------------------------------------------------------------*/

//married people who can jump.
let jumpingMarriedPeople = _.filter(allPeople, function(person){ return person.married && _.includes(person.skills, 'jump'); });
console.log("married people who can jump", jumpingMarriedPeople);

/*----------------------------------------------------------------------------------------------*/

//people who have last name that starts with 'j' or later in the alphabet, and have married children
let x2 = _.filter(allPeople, function(person){ return person.lastName.charAt(0)>='j'});
let married = true;

let y2 = _.filter(x2, function(person){
	married = true;
	_.forEach(person.children, function(child){
		if(child.married===false){
			married = false;
			return married;
		};
	})
	if(!person[children]) married = false;
	return married;

});

console.log("people who have last name that starts with 'j' or later in the alphabet, and have married children", y2);

/*----------------------------------------------------------------------------------------------*/

//change the collection so that the name of each person is: name: {first: 'string', last: 'string'}
//instead of firstName and lastName

_.rename = function(obj, key, newKey) {
  
  if(_.includes(_.keys(obj), key)) {
    obj[newKey] = _.clone(obj[key], true);

    delete obj[key];
  }
  
  return obj;
};

_.forEach(allPeople, function(person){
	
	_.rename(person, 'firstName', 'first');
	_.rename(person, 'lastName', 'last');	
});



console.log("key name changed", allPeople);
/*----------------------------------------------------------------------------------------------*/


let allChildren = _.xor(allPeople,adults);
console.log("allChildren", allChildren);
/*----------------------------------------------------------------------------------------------*/

let arrayOfAge = [];

_.forEach(allPeople, function(person){
	arrayOfAge.push(person.age);

});

console.log("arrayOfAge", arrayOfAge);

/*----------------------------------------------------------------------------------------------*/

function doSomething(){
	_.times(1/2, ()=> console.log("tata"));
}

doSomething();
doSomething();

/*----------------------------------------------------------------------------------------------*/

_.throttle(()=>console.log("1251"),1);
