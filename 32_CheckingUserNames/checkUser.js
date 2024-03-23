"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['Nawaz', 'Shehbaz', 'Imran', 'Zardari', 'Bilawal'];
let new_users = ['Zubair', 'Hasnain', 'Imran', 'Nawaz', 'Waqas'];
new_users.forEach(newusers => {
    let lowerCase = newusers.toLowerCase();
    if (current_users.map(NewUser => NewUser.toLowerCase()).includes(lowerCase)) {
        console.log(`User NAME ${newusers} IS NOT AVAILABLE!`);
    }
    else {
        console.log(`USER NAME ${newusers} IS AVAILABLE`);
    }
});
