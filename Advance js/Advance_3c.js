
class Subject{

	constructor(){
		this.observers = [];
	}

   	subscribe(observer) {
    	this.observers.push(observer);
  	}

    unSubscribe(observer) {
      let index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    }

    notifyObs(observer) {
      let index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    }

    notifyAll() {
   	  let count = 0;	
   	  this.observers.forEach(observer => observer.notify(count++));	
      
    }
}

class Observer{
	
	notify(index) {
      console.log("Observer " + index + " is notified!");
    }

}

let subject = new Subject();

let o1 = new Observer();
let o2 = new Observer();
let o3 = new Observer();
let o4 = new Observer();
let o5 = new Observer();

subject.subscribe(o1);
subject.subscribe(o2);
subject.subscribe(o3);
subject.subscribe(o4);
subject.subscribe(o5);


subject.notifyObs(o1);
subject.notifyAll();