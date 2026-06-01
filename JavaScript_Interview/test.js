const users = [{ age: 20 }, { age: 30 }];

// const updated = users.map((u)=>{
//      u.age += 1; // this can mutates original obj
//      return u;
// });
// console.log(updated);
// console.log(users)

let updated2 = users.map((u)=> ({ // safe way to handle obj property
     ...u,
     age:u.age+1
}))
console.log(updated2);
console.log(users);

// practicing how to implement a higher order function

let greet = (name) => {
     return `Hello ${name}`;
};


let processGreet = (callback,name) => {
     return callback(name);
};

let hofResult = processGreet(greet,"Govind");
console.log(hofResult);

// iffe practice

(function myFunc(){
     let password = "123kd";
     console.log(password)
})();

// closure practice

let counter = () => {
     let count = 1;

     return {
          increment(){
               count = count + 1;
               return count;
          }
     }
};

let result = counter();
console.log(result.increment());
console.log(result.increment());

// promises practice

let myPromise = new Promise((res,rej)=>{
     let status = "Success";

     if(status){
          console.log("Mission Completed");
     }else{
          console.log("Mission Restart");
     }
});

// consuming promise

myPromise.then((data)=>{
     console.log("Data: ",data)
}).catch((err)=>{
     console.log("Error: ",err)
}).finally(()=>{
     console.log("Final Message");
});

// Practice call, apply, and bind

let myData = {
     name:"Govind"
};

function myDetails(city,profession){
     console.log(`Hey, I'm ${this.name} and i'm a ${profession} from ${city}`);
};

myDetails.call(myData,"Siwan","Software Developer");
myDetails.apply(myData,["Siwan","Software Developer"]);
let bundResult = myDetails.bind(myData,"Siwan","Software Developer");
bundResult();