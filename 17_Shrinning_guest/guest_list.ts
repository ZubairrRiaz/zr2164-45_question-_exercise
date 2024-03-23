let GuestNames: string[] = ['zubair','hasnain','waqas','umer'];

//for(let i=0; i<GuestNames.length; i++){

//console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n')
//};
//guest replace kar rahe hain
let absentGuest: string = 'Zubair';

let comingGuest: string = 'Lahori';

GuestNames[0] = comingGuest;

for(let i=0; i<GuestNames.length; i++){

    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n')
    };



console.log(`Mr ${absentGuest} is not coming.`);
// 3 aur guest ko invite kar rahe hain
console.log('Good news! we found big table so we are inviting 3 more guest.');

GuestNames.unshift('Hamza');

GuestNames.splice(2, 0, 'Riaz');

GuestNames.push('bilal');
for(let i=0; i<GuestNames.length; i++){

    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n it is our pleasure to invite you in our party.\n\n Thank you!\n')
    };

// 4 guest ko nikal rahe hum
console.log('Sorry we are inviting only two people because the table did not arrive.');

while(GuestNames.length >2 ){

    let removeGuest = GuestNames.pop();

    console.log(`Dear ${removeGuest}.we are sorry you are not invited.`);

    
}
// 2 guest ko invite kar rahe hain
for (let i=0; i<GuestNames.length; i++){

    console.log('\nAssalamuAlaikum. ' + GuestNames[i] + '\n\n You are still invited.\n\n Thank you!\n')
    };


// sab ko nikal diya
GuestNames.splice(0, 2);
 console.log(GuestNames);
