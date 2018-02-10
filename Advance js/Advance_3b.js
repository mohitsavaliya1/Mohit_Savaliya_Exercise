
class Subject{

    constructor(){
      this.observers = [];
    }

    //to subscribe observer
    subscribe(observer) {
      this.observers.push(observer);
    }

    //to unsubscribe observer
    unSubscribe(observer) {
      let index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    }

    //to notify that perticular observer
    notifyObs(observer) {
      let index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    }

    //to notify all
    notifyAll() {
      let count = 0;  
      this.observers.forEach(observer => observer.notify(count++)); 
      
    }
}

class Observer{

  //notify observer  
  notify(index) {
      console.log("Observer " + index + " is notified!");
    }

}

//creating a subject
let subject = new Subject();

//creating observers
let o1 = new Observer();
let o2 = new Observer();
let o3 = new Observer();
let o4 = new Observer();
let o5 = new Observer();


//subscribe observers to subject
subject.subscribe(o1);
subject.subscribe(o2);
subject.subscribe(o3);
subject.subscribe(o4);
subject.subscribe(o5);

//notify observer 1
subject.notifyObs(o1);

//notify all
subject.notifyAll();