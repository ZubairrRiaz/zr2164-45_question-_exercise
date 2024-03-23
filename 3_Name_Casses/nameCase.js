"use strict";
let person_Name = 'zubair';
console.log(person_Name.toLocaleLowerCase());
console.log(person_Name.toUpperCase());
let personTitlecase = person_Name.replace(/\b\w/g, c => c.toUpperCase());
console.log(personTitlecase);
