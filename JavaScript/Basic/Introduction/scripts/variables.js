// Camel Case Vars
// Dynamic Typing - Infer
// Weak Typing

var name = "Salomão"; // String -> Text -> ""
var age = 20; // Number
var height = 1.71; // Number
var studying = true; // Boolean

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof height, height);
console.log(typeof studying, studying);

var noContent; // Undefined - Declared - No content
console.log(typeof noContent, noContent);

var course = "Front-End - React",
  topic = "JavaScript I";

console.log(course, topic);

// ES6 - var, let, const
// ! Don`t use var

let studentNote = 10;
const studentAverage = 8;
console.log(studentNote);
console.log(studentAverage);

// Let can change - Const cannot change
studentNote = 9;
// ! studentAverage = 5;
console.log(studentNote);
console.log(studentAverage);

// Hoisting -> var -> Global Scope
console.log(text); // Undefined - No Content
var text = "Hello World";
