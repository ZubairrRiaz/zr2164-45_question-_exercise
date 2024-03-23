"use strict";
let GuestNames = ['zubair', 'hasnain', 'waqas', 'umer'];
for (let i = 0; i < GuestNames.length; i++) {
    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n');
}
;
let absentGuest = 'Zubair';
let comingGuest = 'Lahori';
GuestNames[0] = comingGuest;
for (let i = 0; i < GuestNames.length; i++) {
    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n');
}
;
console.log(`mr ${absentGuest} is not coming.`);
