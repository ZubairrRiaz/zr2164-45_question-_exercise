

function carInformation (manufacture:string, model:string, ...moreOption:{[key:string]: any} []): object {

    const carInfo = {
        manufacture,
        model,
        ...Object.assign({}, ...moreOption)
    }
    return carInfo
}

console.log(carInformation('Honda','civic', {color: 'black'},{features: ['Fast speed','Automatic mode']}));