const array = [1, 2, 3, 4, 5];

console.log("Elementos - For");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("Elementos For-Of");
for (const element of array) {
  console.log(element);
}
console.log("Index For-In");
for (const index in array) {
  console.log(index);
}
