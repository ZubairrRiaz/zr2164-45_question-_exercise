"use strict";
function carInformation(manufacture, model, ...moreOption) {
    const carInfo = Object.assign({ manufacture,
        model }, Object.assign({}, ...moreOption));
    return carInfo;
}
console.log(carInformation('Honda', 'civic', { color: 'black' }, { features: ['Fast speed', 'Automatic mode'] }));
