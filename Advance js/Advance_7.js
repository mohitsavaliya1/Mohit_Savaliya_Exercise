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


class Company{
	constructor(){
		this.events = [];
		this.showroom = [];
	}

	//to add company's showrooms
	subscribeShowRoom(showRoom){
		this.showroom.push(showRoom);
	}	

	//this function will create an event and notify about it to all showrooms
	createEvent(eventName){
		this.events.push(eventName);
		for(let i=0;i<this.showroom.length;i++){
			this.showroom[i].notifyEvent(eventName);
		}
	}


}




class ShowRoom{
	constructor(){
		this.customers = [];
		this.events = [];
	}

	//this function will get detail about event whenever company creates any event. 
	//And makes an array at customers's same index as event index in events Array.
	notifyEvent(event){	
		this.events.push(event);
		let index = this.events.indexOf(event);
		this.customers[index] = [];
	}

	//whenever customer visits showroom, showroom subscribe that customer to notify-
	// that customer for perticular events
	subscribeCust(cust, event){	
		let index = this.events.indexOf(event);		
		if(index > -1){
			this.customers[index].push(cust);
		}
	}

	//this function will notify user by events
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

	//A simple function from which customer will get notification. 
	notify(event){
		console.log("Customer   " + this.customerId + "  is notified for " + event.eventName );
	}

}


//creating a company
let maruti = new Company();

//creating two showrooms
let showroom1 = new ShowRoom();
let showroom2 = new ShowRoom();


//creating 6 customers
let cust0 = new Customer(0);
let cust1 = new Customer(1);
let cust2 = new Customer(2);
let cust3 = new Customer(3);
let cust4 = new Customer(4);
let cust5 = new Customer(5);


//maruti subscribes showrooms for notification perpose.
maruti.subscribeShowRoom(showroom1);
maruti.subscribeShowRoom(showroom2);


//creating 2 events
let event1 = new event("add breeza");
let event2 = new event("add alto");


maruti.createEvent(event1);
maruti.createEvent(event2);



//showroom subscribes customers for notification perpose of that events.
showroom1.subscribeCust(cust0, event1);
showroom1.subscribeCust(cust1, event2);
showroom1.subscribeCust(cust2, event1);


showroom1.notifyUser(event1);
showroom1.notifyUser(event2);



showroom2.subscribeCust(cust3, event1);
showroom2.subscribeCust(cust4, event2);
showroom2.subscribeCust(cust5, event2);

showroom2.notifyUser(event1);
showroom2.notifyUser(event2);