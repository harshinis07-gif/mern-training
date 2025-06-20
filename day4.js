let a=7;
if(a%2==0){
    console.log("even")
}
else{
    console.log("odd")
}
for(let a=1;a<10;a++)
    {
        console.log(a);
    }
    a++;
let h=1;
while(h<5){
    console.log(h);
    h++;
}
let c,b;
function add(c,b){
    console.log(c+b);
}
add(8,9);
let sub=(m,n)=>{
    console.log(m-n)
}
sub(20,5);

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
