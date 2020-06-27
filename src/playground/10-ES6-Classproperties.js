

class OldSyntax {
    constructor(){
        this.name= 'MIke'
    }
}

console.log(new OldSyntax())

class NewSyntax {                       //the particular instance gets the name assigned due to the transform class properties.
    name='Nijo';
    getGreeting = ()=>{
        return `HI. My name is ${this.name}`
    }
    
}

const newSyntax = new NewSyntax();
const getGreeting = newSyntax.getGreeting;
console.log(getGreeting())