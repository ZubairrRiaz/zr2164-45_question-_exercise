

let magician: string[] = ['ben 10','oggy','bheem','doraemon'];

function copyarr(arr:string[]){
       return [...arr]
}

copyarr(magician);

function make_great (magicianArray:string[]){

    for (let i = 0; i < magicianArray.length; i++) {

          magician[i] = 'the great ' + magicianArray[i];
        
    }
}

make_great(magician);

function show_magician (magician:string[]){

    magician.forEach(element => {

        console.log(element);
        
    });
}
const copymagicarr =  copyarr(magician);
make_great(copymagicarr);
console.log('\nThis is my original array,\n');

show_magician(magician);

console.log('\nThis is my modify array,\n');

show_magician(magician);