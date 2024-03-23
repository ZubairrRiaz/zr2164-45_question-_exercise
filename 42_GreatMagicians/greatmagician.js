"use strict";
let magician = ['ben 10', 'oggy', 'bheem', 'doraemon'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great ' + magicianArray[i];
    }
}
make_great(magician);
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magician(magician);
