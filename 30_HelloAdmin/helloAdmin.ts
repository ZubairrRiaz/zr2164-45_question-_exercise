
const userName:string[] = ['zubair','hasnain','admin','waqas','umer'];

for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log('Hello Admin would you like to see status report!');
        
    }else {
        console.log(`Hello ${userName[i]} thank you for logged in again.`);
        
    }
    
}
