function* Sum(a,b)
{
    yield a+b;
    yield a+30; 
    yield a+40;
    yield a+50;
}
const result=Sum(10,20)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)