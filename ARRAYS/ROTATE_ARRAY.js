const arr=[20,50,60,80,30]

// function rotate(arr,n){
//     let first=0;
//     for(let i=0;i<n;i++){
//         first=arr.shift();
//         arr.push(first)
//     }
//     console.log(arr)
// }
// rotate(arr,5)

function rotate(arr, n){
    let first=0;
    n=n%arr.length;
    for(let i=0;i<n;i++){
        first=arr.shift();
        arr.push(first)
    }
    console.log(arr)
}
rotate(arr,1)