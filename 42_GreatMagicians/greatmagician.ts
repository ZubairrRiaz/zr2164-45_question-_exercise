

let magician: string[] = ['ben 10','oggy','bheem','doraemon'];

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
show_magician(magician);