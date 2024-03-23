import { log } from "console";


const favouriteFruits: string [] = ['apple','banana','mango'];

if (favouriteFruits.includes('apple')) {
    console.log('I REALLY LIKE APPLE!');
    
}
else if (favouriteFruits.includes('strawberry')) {
    console.log('I REALLY LIKE STRAWBERRY!');
    
}
else if (favouriteFruits.includes('banana')) {
    console.log('I REALLY LIKE BANANA!');
    
}
else if (favouriteFruits.includes('watermelon')) {
    console.log('I REALLY LIKE WATERMELON!');
    
}
if (favouriteFruits.includes('mango')) {
    console.log('I REALLY LIKE MANGO!');
    
}
else {
    console.log('None of them i like,');
    
}