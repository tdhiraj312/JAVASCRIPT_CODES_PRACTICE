//1. WAJSP to print the even number between 0 to 90
//2. WAJSP to print the prime number between 0 to 30
//3. WAJSP to print perfect number between 0 to 50
//4. Palindrome Number
//5. ArmStrong Number
//6. WAJSP to find the number which are completely divisible by 3 and 5

//1.
// for(let a=0;a<90;a++)
// {
//    if(a%2==0)
//    {
//     console.log(a);
//    }
// }

//2.
// for (let a = 0; a <= 30; a++) {
//   if (a <= 1) {
    
//     continue;
//   }
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(a);
//   }
// }

//3.
// function isPerfectNumber(num) {
//   if (num <= 0) {
//     return false;
//   }
//   let sumOfDivisors = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sumOfDivisors += i;
//     }
//   }
//   return sumOfDivisors === num;
// }
// console.log("Perfect numbers between 0 and 50:");
// for (let i = 0; i <= 50; i++) {
//   if (isPerfectNumber(i)) {
//     console.log(i);
//   }
// }

//4.
// function isPalindromeNumber(num) {
//   if (num < 0) {
//     return false;
//   }
//   let originalNum = num;
//   let reversedNum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     reversedNum = reversedNum * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   return originalNum === reversedNum;
// }

// console.log("Is 121 a palindrome?", isPalindromeNumber(121));
// console.log("Is 123 a palindrome?", isPalindromeNumber(123));
// console.log("Is 1221 a palindrome?", isPalindromeNumber(1221));
// console.log("Is 7 a palindrome?", isPalindromeNumber(7));
// console.log("Is -121 a palindrome?", isPalindromeNumber(-121));
// console.log("Is 0 a palindrome?", isPalindromeNumber(0));

//1. WAJSP to find out the first 20 numbers which are divisible by Prime Numbers.(IMP)
//2. WAJSP to find out the Leap Year.
//3. WAJSP to find out the factorial.
//4. WAJSP to find out the LCM of 20,30,37,23,65
//5. WAJSP to find the sumation of prime numbers between 0 to 100.


//3.
function factorial(n) { 
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 10:", factorial(10));

//2.
function isLeapYear(year) {
  if(year % 4 ===0){
    if(year % 100 ===0){
      return year % 400 ===0;
    }
    return true;
  }
  return false;
}
console.log("Is 2020 a Leap Year?", isLeapYear(2020));
console.log("Is 2025 a Leap Year?", isLeapYear(2025));
console.log("Is 1998 a Leap Year?", isLeapYear(1998));
console.log("Is 2012 a Leap Year?", isLeapYear(2012));

//4.
for(let a=0; a<=30; a++)
{
  if(a<=1)
  {
    continue;
  }
  let isPrime=true;
}



