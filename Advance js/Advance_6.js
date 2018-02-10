
/*car*/
class car{
	constructor(){
		this.type = "car";
	}

	rate(){
		log.add(`${this.modelName} rate is ${this.modelPrice} `);
	}

}

/*benz model*/
class benz extends car{
	constructor(){
		super();
		this.modelName = "Benz";
		this.modelPrice = 10; 
	}
}

/*audi model*/
class audi extends car{
	constructor(){
		super();
		this.modelName = "Audi";
		this.modelPrice = 20; 
	}
}

/*factory class*/
class factory{
	
	createItem(item){
		
		if(item.name === "Benz"){
			item = new benz();
		}
		if(item.name === "Audi"){
			item = new audi();
		}

		return item;
	}

}

/*log function */
let log = (function(){
	let log = "";

	return{
		add: function(msg){
			log += msg + "\n";
		},
		show: function(){
			console.log(log);
		}
	}

})();


let factory1 = new factory();

let items = [];
items.push(factory1.createItem({name:"Benz"}));
items.push(factory1.createItem({name:"Audi"}));

items.forEach(item => item.rate());

log.show(); 
/*Benz rate is 10 
Audi rate is 20 */
