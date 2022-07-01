var i=100;
let j=80;
const pi=3.14159;

{
var i=110;
let j=85;
const pi=3.14;

console.log("i="+i);//110
console.log("j="+j);//85
console.log("pi="+pi);//3.14
}

console.log("i="+i);//110後
console.log("j="+j);//80前
console.log("pi="+pi);//3.14159前