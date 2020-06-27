class Person{
    
    constructor(name ='Anonymous',age=0){        //function defaults.
        this.name=name,
        this.age=age
    }

    getGreeting(){
        return `Hi ${this.name}.`
    }

    getDescription(){
        return `${this.name} is ${this.age} year old.`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);                        //refers to the constructor of the parent class.
        this.major = major;                       
    }

    hasMajor(){
        return !!this.major;                    //undefined when flipped twice gives false
    }

    getDescription(){
        let description = super.getDescription()
        
        if(this.hasMajor()){
            description += `Their major is ${this.major}`
        }

        return description
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name, age);
        this.homeLocation= homeLocation;
 }

 getGreeting(){

    let greeting = super.getGreeting();
     if(this.homeLocation)
     {
         greeting+=  `I live in ${this.homeLocation}`
     }
     return greeting;
 }
}


const me = new Traveller('Nijo',12,'asdasd');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting())
