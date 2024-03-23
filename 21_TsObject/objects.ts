
interface person  {

   name : string,
   Age : number,
   nationality : string,
   Student : boolean,

}

let person: person = {
    name : 'Zubair',
    Age : 20,
    nationality : 'Pakistani',
    Student : true,
}

console.log(person);

interface car {
    name : string,
    model: string,
    speed : number,
    automatic: boolean

}

let car: car = {
    name : 'Honda',
    model: 'civic',
    speed: 160,
    automatic: true,

}

console.log(car);