//1.
function isPrime(num) {
  if(num<=1) return false;
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i===0) return false;
  }
  return true;
}

function findDivisibleByPrimes(limit) {
  const result = [];
  let num = 2;
  while (result.length < limit) {
    if (isPrime(num)) {
      for (let i = 1; i <= 100; i++) {
        if (i % num === 0) {
          result.push(i);
          if (result.length === limit) {
            break;
          }
        }
      }
    }
    num++;
  }
  return result;
}
console.log("First 20 numbers divisible by prime numbers:", findDivisibleByPrimes(20));

//2.
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
console.log("Is 2020 a leap year?", isLeapYear(2020));
console.log("Is 2021 a leap year?", isLeapYear(2021));
console.log("Is 2000 a leap year?", isLeapYear(2000));
console.log("Is 1900 a leap year?", isLeapYear(1900));

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