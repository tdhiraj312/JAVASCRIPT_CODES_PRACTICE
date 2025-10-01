//It can be done with two types nested function:
//1.calling child function inside the  parent
//2.functional currying/js currying


//1.calling function:------------------------
// function parent()
// {
//     let a=40;
//     let b=90;

//     function child()
//     {
//         let c=30;
//         console.log(a,b,c)
//     }
//     child();
// }
// parent();



//2.Currying function:------------------------
function parent()
{
    let a=40;
    let b=90;

    return function child()
    {
        let c=30;
        console.log(a,b,c)

    return function gchild()
    {
        let d=888;
        console.log(a,b,c,d)
    }
    }
    
}
parent()()();