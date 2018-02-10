
/*creating 3 symbols*/
/*Symbol.for method*/
//global symbol
const SYMBOL1 = Symbol.for("foo");
const SYMBOL2 = Symbol.for("foo");
const SYMBOL3 = Symbol.for("bar");

console.log(SYMBOL1 === SYMBOL2); //true

console.log(SYMBOL1.toString()); //Symbol(foo)
console.log(Symbol.valueOf(SYMBOL1)); //ƒ Symbol() { [native code] }

console.log(SYMBOL1.valueOf()); //Symbol(foo) (in red)
console.log(SYMBOL1); //Symbol(foo) (in red)


//local symbol
const SYMBOL4 = Symbol();
console.log(SYMBOL4); //Symbol() (in red)


console.log(Symbol.keyFor(SYMBOL4)); //undefined
console.log(Symbol.keyFor(SYMBOL1)); //foo

let id = Symbol.for("id");
let object = {
	name: "object",
	age: 48
};
object[id] = 45;

for(let key in object){
	console.log(object[key]);
}
