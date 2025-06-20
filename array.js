let fruits = ["apple", "banana"];
console.log("Original:", fruits);

// push
fruits.push("orange");
console.log("After push:", fruits);

// pop
let popped = fruits.pop();
console.log("Popped item:", popped);
console.log("After pop:", fruits);

// reverse
fruits.reverse();
console.log("After reverse:", fruits);

// concatenation
let moreFruits = ["grape", "melon"];
let allFruits = fruits.concat(moreFruits);
console.log("After concatenation:", allFruits);

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("Map (doubled):", doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log("Filter (even numbers):", even);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduce (sum):", sum);

