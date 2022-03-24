console.log("promise initiated");

let successPromise=new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("success"),1000)
});

successPromise.then(data=> console.log("Promised "+ data))

console.log("promise pending");

console.log(" Failure promise initiated");

let failurePromise=new Promise((resolve, reject)=>{
    setTimeout(()=> reject("error"),500)
});

failurePromise.then(data=> console.log("Promise "+ data)).catch(data=>console.log("Promise "+ data))

console.log("Failure promise pending")

Promise.all([successPromise, failurePromise]).then(data=>console.log("Promise All"+data)).catch(data=>console.log("Promise All"+data));

Promise.allSettled([successPromise, failurePromise]).then(data=>console.log("Promise All Settled",data)).catch(data=>console.log("Promise All Settled",data));

Promise.race([successPromise, failurePromise]).then(data=>console.log("Promise Race"+data)).catch(data=>console.log("Promise Race"+data));