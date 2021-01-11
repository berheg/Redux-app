function greet(fn) {
  console.log(fn);
}
function sayHello() {
  return "Hello World";
}
//higher order functions
let numbers =[1,2,3];
numbers.map(number => number*3);
setTimeout(() => console.log("Hello World"), 1000);
//function composition
let input = " ReactJs ";
let output = "<div>" + input +"</div>";
const trim = str => str.trim();
const wrap = (type, str) =>`<${type}>${str}</${type}>`;
const toLowerCase = str = str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
//composing and piping
