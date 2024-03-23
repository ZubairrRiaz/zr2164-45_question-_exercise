"use strict";
function make_sandwitches(item) {
    console.log('Making the sandwitch witch:\n');
    item.forEach(element => console.log('_' + element));
    console.log('\nEnjoy the sandwich!');
}
make_sandwitches(['cheese', 'butter', 'mionese']);
make_sandwitches(['chicken', 'omlet', 'mionese']);
make_sandwitches(['peanut', 'butter', 'lettuce']);
