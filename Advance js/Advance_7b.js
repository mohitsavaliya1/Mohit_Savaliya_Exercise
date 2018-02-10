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
		this.showroom = [];
	}

	getShowRoom(showRoom){
		this.showroom.push(showRoom);
	}	

	createEvent(eventName){
		for(let i=0;i<this.showroom.length;i++){
			this.showroom[i].notifyEvents(eventName);
		}
	}


}

class ShowRoom{
	constructor(){
		this.customers = [];
		this.events = [];
		this.company = [];
	}

	subscribeCompany(companyName){
		this.company.push(companyName);
		let indexOfcompany = this.company.indexOf(companyName);
		this.company[indexOfcompany].getShowRoom(this);
	}

	notifyEvents(event){	
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
			this.customers[index].forEach(customer => customer.notify(event));
		}
	}

}

class Customer{
	constructor(id){
		this.customerId = id; 
		this.events = [];
	}

	notify(event){
		console.log("Customer   " + this.customerId + "  is notified for " + event.eventName );
	}

	subscribeEvent(event, showroom){
		this.events.push(event);
		showroom.subscribeCust(this,event);
	}

}

let maruti = new Company();


let showroom1 = new ShowRoom();
let showroom2 = new ShowRoom();

let cust0 = new Customer(0);
let cust1 = new Customer(1);
let cust2 = new Customer(2);
let cust3 = new Customer(3);
let cust4 = new Customer(4);
let cust5 = new Customer(5);

showroom1.subscribeCompany(maruti);
showroom2.subscribeCompany(maruti);


let event1 = new event("add breeza");
let event2 = new event("add alto");


maruti.createEvent(event1);
maruti.createEvent(event2);


cust0.subscribeEvent(event1,showroom1);
cust1.subscribeEvent(event1,showroom1);
cust2.subscribeEvent(event1,showroom1);


showroom1.notifyUser(event1);
showroom1.notifyUser(event2);


cust3.subscribeEvent(event1,showroom2);
cust4.subscribeEvent(event2,showroom2);
cust5.subscribeEvent(event2,showroom2);

/*showroom2.notifyUser(event1);
*/showroom2.notifyUser(event2);
