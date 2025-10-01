const arr=[2,5,7,8,9,25,31,39,38,47]

let count=0

for(let i=0;i<arr.length;i++)
{
     count=1;
    for(let j=2;j<=arr[i];j++)
    {
        if(arr[i]%j==0)
        {
            count++;
        }
    }
    count ==2 && console.log(" it is a prime number: "+arr[i])
}
