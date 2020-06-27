 var name= 'Nijo';
 var name = 'Noble';
 console.log('name',name)

let nameLet = 'Nitin';
nameLet = 'Blaze';
console.log('nameLet',nameLet)

//const cannot be even reassigned.
//functions are also scoped.

function getPetName(){
    const petName= 'Doggo'
    return petName
}

console.log(petName)        //constant does not belongs to the scope.
const petName= getPetName();
console.log(petName)        //petname is out of the scope of the function.

//block scoped.

const fullName = 'Nijo Noble';
let firstName;

if(fullName)
{
    firstName=fullName.split(' ')[0]            //had firstName been a const variable, it would've thrown an error since it is block scoped.
    console.log(firstName)
}