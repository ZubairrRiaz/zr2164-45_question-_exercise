"use strict";
let GuestNames = ['zubair', 'hasnain', 'waqas', 'umer'];
//for(let i=0; i<GuestNames.length; i++){
//console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n')
//};
let absentGuest = 'Zubair';
let comingGuest = 'Lahori';
GuestNames[0] = comingGuest;
for (let i = 0; i < GuestNames.length; i++) {
    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n');
}
;
console.log(`Mr ${absentGuest} is not coming.`);
console.log('Good news! we found big table so we are inviting 3 more guest.');
GuestNames.unshift('Hamza');
GuestNames.splice(2, 0, 'Riaz');
GuestNames.push('bilal');
for (let i = 0; i < GuestNames.length; i++) {
    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n');
}
;
console.log('Sorry we are inviting only two people because the table did not arrive.');
while (GuestNames.length > 2) {
    let removeGuest = GuestNames.pop();
    console.log(`Dear ${removeGuest}.we are sorry you are not invited.`);
}
for (let i = 0; i < GuestNames.length; i++) {
    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n You are still invited.\n\n Thank you!\n');
}
;
GuestNames.splice(0, 2);
console.log(GuestNames);
