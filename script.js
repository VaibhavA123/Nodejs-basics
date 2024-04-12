// let n =5;
// for(let i=0; i < n;i++){
//     console.log("hello ",i);
// }
// console.log("\n");
// console.log("----------------------");
// for(let j =0; j < n;j++){
//     if(j%2==0){
//         console.log("even ",j);
//     }
// }

// console.log(process.argv);

// let args = process.argv;

// for(let i=2;i<args.length;i++){
//     console.log("hello & welcome to ",args[i]);
// }


// let args = process.argv;
// console.log(args);
// const someValue = require("./math");
// console.log(someValue);
// console.log(someValue.sum(2,3));
// console.log(someValue.PI);



// let args = process.argv;
// console.log(args);
// let func = require("./math");
// console.log(func);
// console.log(func.avg(2,3,4));
// console.log(func.pow(2,3));
// console.log(func.remainder(4,2));


// const info = require("./Fruits");
// console.log(info);
// console.log(info[0]);
// console.log(info[0].name,info[0].color);


// const info = require("./Avengers");
// console.log(info);
// console.log(info.avg1.name,"   ||||    ",info.avg2.name,"    ||||  ",info.avg3.name);




// const figlet = require("figlet");

// figlet("Maa & Papa", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


// import {sum } from "./math.js"
// import {generate} from "random-words";
// try{
// // console.log(sum(1,3));
// console.log(generate());
// }
// catch(err){
//     console.log(err);
// }

// import {generate} from "random-cat-word";

// console.log(generate(10))


const getRandomCat = require('random-cat-img');

(async () => {
    const data = await getRandomCat();
    console.log(data.message);
})();
getRandomCat().then(data => console.log(data.message));
