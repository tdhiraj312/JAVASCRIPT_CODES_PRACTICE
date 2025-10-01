// const arr=[10,20,30,40,50,60,70,80,90,100]
// const result=arr.forEach((ele,i,r)=>ele+5)
// console.log(result);

//-------------------MAP ARRAY METHODS-----------------------
// const arr=[10,20,30,40,50,60,70,80,90,100]
// const result=arr.map((ele,i,r)=>i+5)
// console.log(result)
// console.log(arr)

//-------------------FILTER ARRAY METHOD-----------------------------
// const arr=[10,20,30,40,50,60,70,80,90,100]
// const result=arr.filter((ele,i,r)=>ele>30)
// console.log(result)
// console.log(arr);

//----------------------------FIND ARRAY METHOD----------------------
// const arr=[10,20,30,40,50,60,70,80,90,100]
// const result=arr.find((ele,i,r)=>ele<20)
// console.log(result)
// console.log(arr);

//-------------------------------REDUCE ARRAY METHOD----------------------
// const arr=[10,20,30,40,50,60,70,80,90,100]
// const result=arr.reduce((acc,value)=>acc*=value,10);
// console.log(result)
// console.log(arr);

//------------------------HOMEWORK----------------------------------
//WAJP to find the summation of an array elements?
//WAJP to find the maximum value inside the array?
//WAJP to find the duplicates value from the array?
//WAJP to find the frequency of repeated elements?
//WAJP to find the prime numbers from the given array?
//WAJP to sort the array in ascending and decending order?
//WAJP to reverse the array without using inbuilt function?
//WAJP to find out the palindrome numbers from the given array?
//WAJP to find out the armstrong numbers from the given array?
//WAJP to rotate the array by the given number of rotation?
//--------------------------------------------------------------------

//----------------SOLUTION-------------------------------
//1.WAJP to find the summation of an array elements?
// function sumArrayElements(arr){
//     return arr.reduce((acc,curValue)=>acc+curValue,0);
// }
// const numbers=[10,20,30,40,50]
// const totalsum=sumArrayElements(numbers)
// console.log(numbers)
// console.log(totalsum);
//---------------------------------------------------------
//2.WAJP to find the maximum value inside the array?
// const numbers_1=[10,20,30,40,50]
// const maxValue=Math.max(...numbers_1);

// console.log(numbers_1)
// console.log(maxValue)

//-------------------------------------------------------------
//3.WAJP to find the duplicates value from the array?
// function findDuplicates(arr){

// }
// const numbers_2=[1,2,3,4,5,2,6,3,7,1];
// const duplicates=findDuplicates(numbers_2)

// console.log(numbers_2)
// console.log(duplicates)

//----------------------------------------------------------------------------
// const arr=[10,30,50,70,90,60]

// //console.log(arr.forEach((ele,i)=>ele));

// console.log(arr.filter(ele=>1))

// //console.log(arr.find(ele=>0));

// console.log(arr.map(ele=>50))

//-------------------------------------------------------------------------------
// const arr=[-101,-109,-98,97,-101]
// const result=arr.reduceRight((acc,value)=>acc+=value,0);
// console.log(result)
// console.log(arr)

//-----------------------------------------------------------------------------
//WAJSP to find out the duplicate values in the given array?

// const array=[10,20,30,40,10,20,30,40,10,20,30,40]
// const duplicates=[]

// const result=array.forEach((ele,i,r)=>{
//    if(r.indexOf(ele)!==i && !duplicates.includes(ele))
//     duplicates.push(ele)
// })

// console.log(duplicates)

//----------------------------SORT METHOD-------------------------------------
//const array=[10,20,30,40,10,20,30,40,10,20,30,40]
//console.log(array.sort((a,b)=>b-a));//DECENDING ORDER
//console.log(array.sort((a,b)=>a-b));//ASCENDING ORDER

//---------------------------SORTING WITHOUT IN_BUILT METHOD-------------------------
const array=[10,20,30,40,10,20,30,40,10,20,30,40]
//output--[10,10,10,20,20,20,30,30,30]
let temp=0
for(let i=0;i<array.length;i++)
{
   for(let j=i+1;j<array.length-1;j++)
    {
        if(array[i]>array[j])
        {
             temp=array[i]
            array[i]=array[j]
            array[j]=temp;
        }
           
    }
}
console.log(array)

