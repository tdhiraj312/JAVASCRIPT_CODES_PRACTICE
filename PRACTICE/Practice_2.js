//-----------------------------FUNCTION HOISTING------------------------------------

// console.log(Fun(null)) 
//     var a=null
// function Fun(a+20){
//     a+=20;
//     return a;
// }


// console.log(undefined+null);
// console.log(null*10);

// if(null)
// {
//     console.log("HELLO")
// }

// function abc(a,b)
// {
//     clg(a,b)
//   let  c=a(30)+b(40)
//   return c
// }

let a;
let b=null;
console.log((a+b?a:a-b)??30)