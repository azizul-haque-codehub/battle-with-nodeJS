
console.log("Thread 1 started");
for (let i = 0; i < 1000000000; i++) {
  if(i % 400000000 == 0){
    console.log(`Loop no 1 : ${i}`)
 
  }
}