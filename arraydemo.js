// [array]
// different types of values
// size dynamic
// order preserved
// duplicates allowed

// var arr=[1,3,4,58,9]
// for (let i of arr){
//     console.log(i);
// }

var marks=[-1,100,30,35,40,0,45,50,55,60,65,70,101]
// marks.forEach(m=>console.log(m))

// marks.map(m=>m+3).forEach(n=>console.log(n))
// 
// marks.filter(m=>m>50).forEach(m=>console.log(m))
// marks.filter(m=>m%2==0).forEach(m=>console.log(m))
// console.log(marks.includes(50));

marks.sort((m1,m2)=>m1-m2)
console.log(marks);

