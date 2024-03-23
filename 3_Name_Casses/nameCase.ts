

let person_Name:string = 'zubair';

console.log(person_Name.toLocaleLowerCase());

console.log(person_Name.toUpperCase());

let personTitlecase:string = person_Name.replace(/\b\w/g, c=>c.toUpperCase());

console.log(personTitlecase);