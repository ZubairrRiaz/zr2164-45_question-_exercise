import { toASCII } from "punycode";



let current_users: string[] = ['Nawaz','Shehbaz','Imran','Zardari','Bilawal'];

let new_users: string[] = ['Zubair','Hasnain','Imran','Nawaz','Waqas'];

new_users.forEach(newusers =>{
    let lowerCase:string = newusers.toLowerCase();
    if(current_users.map(NewUser =>NewUser.toLowerCase()).includes(lowerCase)){
        console.log(`User NAME ${newusers} IS NOT AVAILABLE!`);
        
    }else {
        console.log(`USER NAME ${newusers} IS AVAILABLE`);
        
    }
})
