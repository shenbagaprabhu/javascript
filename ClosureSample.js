const scope=()=>{
for(let i=1; i<=5; i++){
setTimeout(()=> console.log(i), i*100)
}
console.log("code started");
}
    
const closure=()=>{
for(var i=1; i<=5; i++){
function x(i){
setTimeout(()=> console.log(i), i*100)
}
x(i);
}
console.log("code started");
}