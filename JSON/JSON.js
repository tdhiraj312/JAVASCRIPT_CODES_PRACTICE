//NORMAL OBJECT DECLARATION----------
const obj={
    empName:"Smith",
    salary:20000,
    department:"HR",
    mgr:12
}
console.log(JSON.stringify(obj))
console.log(JSON.par)

//JSON OBJECT DECLARATION--------------
// const obj={
//     "empName":"Smith",
//     "salary":20000,
//     "department":"HR",
//     "mgr":12
// }

//----------------------------SESSION BROWSER----------------
sessionStorage.setItem("employee", JSON.stringify({empName:"scott",empid:20}));
//console.log(sessionStorage.getItem("employee"));
sessionStorage.removeItem("employee");
// sessionStorage.clear();