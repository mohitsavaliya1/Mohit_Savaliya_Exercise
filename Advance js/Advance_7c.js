//event class to create new event objects
class event {
	constructor(eventName){
		this.eventName = eventName;
	}

	set nameOfEvent(eventName){
		this.eventName = eventName;
	}

	get nameOfEvent(){
		return this.eventName;
	}
}


class Maruti{
	constructor(){
		this.events = [];
		this.showroom = [];
	}

	subscribeShowRoom(showRoom){
		this.showroom.push(showRoom);
	}	

	createEvent(eventName){

		this.events.push(eventName);
		
		for(let i=0;i<this.showroom.length;i++){
			this.showroom[i].subscribeEvents(eventName);
		}

	}


}




class ShowRoom{
	constructor(){
		this.customers = [];
		this.events = [];
	}

	subscribeEvents(event){	
		this.events.push(event);
		let index = this.events.indexOf(event);
		this.customers[index] = [];
	}

	subscribeCust(cust, event){	
		let index = this.events.indexOf(event);		
		if(index > -1){
			this.customers[index].push(cust);
		}
	}

	notifyUser(event){
		let index = this.events.indexOf(event);
		if(index > -1){
			let numOfCust = this.customers[index].length;
			this.customers[index].forEach(customer => customer.notify(event));
		}
	}

}

class Customer{
	constructor(id){
		this.customerId = id; 
	}

	notify(event){
		console.log("Customer   " + this.customerId + "  is notified for " + event.eventName );
	}



}

let maruti = new Maruti();


let showroom1 = new ShowRoom();
let showroom2 = new ShowRoom();

let cust0 = new Customer(0);
let cust1 = new Customer(1);
let cust2 = new Customer(2);
let cust3 = new Customer(3);
let cust4 = new Customer(4);
let cust5 = new Customer(5);

maruti.subscribeShowRoom(showroom1);
maruti.subscribeShowRoom(showroom2);



let event1 = new event("add breeza");
let event2 = new event("add alto");


maruti.createEvent(event1);
maruti.createEvent(event2);




showroom1.subscribeCust(cust0, event1);
showroom1.subscribeCust(cust1, event1);
showroom1.subscribeCust(cust2, event1);


showroom1.notifyUser(event1);


showroom2.subscribeCust(cust3, event1);
showroom2.subscribeCust(cust4, event2);
showroom2.subscribeCust(cust5, event2);

showroom2.notifyUser(event2);
