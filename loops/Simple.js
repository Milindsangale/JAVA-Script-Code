// for loops
for (let i=1;i<=5;i++){
    console.log("i",i)
}

let sum =0;
let n =100;
for(let i=1;i<=n;i++){
    sum = sum + i;
    console.log("sum",sum);
}


for(let i=1;i<=10;i++){
    console.log("Milind");
}



// fot-of loop
let length =0;
let str ="Milind";
for(let i of str) {
  //  console.log("i=", i);
    length++;
    console.log("String length",length);
}

//for in loop


//print all even numbers from 0 to 100
for(let num=0; num<=100;num++){
   // console.log("num=",num);
   if(num%2 ==0){
    console.log("even number",num);
   }
}


// game
let gameNum = 100;
let usernumner =prompt("Guess the number");
while(usernumner != gameNum){
   usernumner= prompt("you entered wrong number. Guess again :");
}
    console.log("congratulations you entered the rigt number");




let Str = "Milind sangale";