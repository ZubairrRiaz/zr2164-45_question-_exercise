"use strict";
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    const element = Numbers[i];
    if (Numbers[i] == 1) {
        console.log(Numbers[i] + 'st');
    }
    else if (Numbers[i] === 2) {
        console.log(Numbers[i] + 'nd');
    }
    else if (Numbers[i] == 3) {
        console.log(Numbers[i] + 'rd');
    }
    else {
        console.log(Numbers[i] + 'th');
    }
}
;
