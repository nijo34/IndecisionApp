// const user = {
//     name:'Nijo',
//     cities:['Kerala','Delhi','Out of this world'],
//     printplaceslived(){
//        return this.cities.map((city)=> city+'!')       
//     }
// }
// console.log(user.printplaceslived())

const multiplier = {
    numbers:[2,4],
    multiBy:4,
    multiply(){
       return this.numbers.map((number)=>number*this.multiBy)
    }
}
console.log(multiplier.multiply())