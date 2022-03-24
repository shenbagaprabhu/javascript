

function  printEmployeeDetails(companyName, designation){
    console.log(`userName ${this.name} and email address is ${this.email}`
                    + `working in ${companyName} as a ${designation}`);
}

//function borrowing , both call and apply will call the method immediately
printEmployeeDetails.call({name:"prabhu", "email":"prabhu@gmail"},"socgen", "SSE");

printEmployeeDetails.apply({name:"ravi", "email":"ravi@gmail"},["socgen","SE"]);

//bind method will store the function and we can call it later
let employeeDetailsBind = printEmployeeDetails.bind({name:"ravi", "email":"ravi@gmail"});

employeeDetailsBind("socgen", "SSE")


Function.prototype.customBind= function(...arg){
    let obj =  this;
    let customObj = arg [0];
    let param = arg.slice(1);
    return function(...arg){
        obj.apply(customObj, [...param, ...arg]);
    } 
}

let employeeDetailsCutomBind = printEmployeeDetails.customBind({name:"customRavi", "email":"customRavi@gmail"}, "socgen");

employeeDetailsCutomBind( "SSE")

Array.prototype.filter=function (arg){

    let array = this;
    let newArray=[];
    array.forEach(data =>{
        let value = arg.call(null, data);
        if(value){
            newArray.push(data);
        }
    })
    return newArray;
}

let array = [1,84,97,3,6,8,9];

let cumutlatedArray = array.filter((data)=> data > 9);

console.log(cumutlatedArray);

let studentList = [
    {"name":"prabhu","age":20},
    {"name":"ravi","age":25},
    {"name":"raju","age":30},
    {"name":"vijay","age":15},
];

Array.prototype.customReduce=function (reducer, intialValue){
    let array = this;
    let cum =intialValue;
    array.forEach(data =>{
        cum = reducer.call(null, cum, data);
    })
    return cum;
}


let data = studentList.customReduce((cum, current)=>{
    if(current.age < 25){
        cum.push(current);
    }
    return cum;
},[]);

console.log(data)

Array.prototype.customMap=function (arg){
    let array = this;
    let newArray=[];
    array.forEach(data =>{
        newArray.push(arg.call(null, data));
    })
    return newArray;
}

let customMap = studentList.customMap((data)=>{
    if(data.age < 25){
        return data;
    }
},[]);

console.log(customMap)

let orginalMap = studentList.map((data)=>{
    if(data.age < 25){
        return data;
    }
},[]);

console.log(orginalMap)