const students=[
    { name:"Alice",marks:[75,80,90]},{name:"Bob",marks:[60,50,70]},{name:"Charlie",marks:[95,85,90]}
];
const totals=students.map(student=>{
    return{
        name:student.name,
        total:student.marks.reduce((a,b)=>a+b,0)
    };
});
console.log("Total Marks:",totals);
const above200=
totals.filter(student=>student.total>200);
console.log("Above 200 Marks:",above200);
const topper=totals.reduce((max,student)=>{
    return student.total > max? student.total:max;
},0);
console.log("Topper's Marks:",topper);


let abc=new Set([1,6,9,5,7,8,9,8,28,6,6]);
console.log(abc);
abc.add(99);
let xy=new Map();
xy.set("name","tamil");


let yz=["grape","choc","apple"];
let[a,b,c]=yz;
console.log(a,c);

let arr1=[3,7,8,9];
let arr2=[...arr1,4,7,3];
console.log(arr2);

x=9;
console.log(x);

function outer(){
    let name="harshini";
    function inner(){
        console.log("hello"+ name);
    }
    return inner;
}
let mno=outer();
mno();


console.log("first");
setTimeout(()=>{
    console.log("second ,settime");
},5000);
console.log("end");

console.log("first");
setInterval(()=>{
    console.log("second ,settime");
},5000);
console.log("end");