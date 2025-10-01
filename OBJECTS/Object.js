// const emp={
//     empId:12,
//     empName:'Smith',
//     salary:80000,
// }
// console.log(emp.salary)
// console.log(emp["empId"])


//------------------------USE VARIABLE VALUE AS A KEY----------------------------------
// const b="deptno";
// const emp={
//     empId:12,
//     empName:'Smith',
//     salary:80000,
//     [b]:30,
// }
// console.log(emp)


//--------------------------------CREATING OBJECT WITH CONSTRUCTOR-------------------------
const emp1=new Object()
emp1.empid=20;  //--------------CREATION------
//---emp1.empid=10;  //--------------UPDATION-----
//emp1.empid      //--------------READ---------------
//delete emp1.empid    //--------------DELETE-------------


//console.log(emp1)

//---------------------------------METHODS FOR ACCESSINGG THE VALUES OF AN OBJECT------------------
//Value method:-returns the array of all the values
const obj={
    Dhiraj:10,
    emp:'smith',
    sal:50000,
    deptno:40,
    mgr:20,
    loc:'gurugram'
}
Object.values(obj).forEach((ele,i)=>{
    console.log(obj)
})

//KEY METHOD:- returns the array of all the keys---------------------------
const obj_1={
    empid:10,
    empName:'smith',
    salary:50000,
    deptno:40,
    mgr:20,
    loc:'gurugram'
}
Object.keys(obj_1).forEach((ele,i)=>{
    console.log(obj_1[ele])
})

//ENTRIES METHOD----IT WILL RETURN BOTH KEY AND VALUE--------------------------
console.log(Object.entries(obj_1))

//ASSIGN METHOD:- It is used to merge two or more object----------
//----SYNTAX-----Object.assign(target obj,source obj_1);

const newObj=Object.assign({},obj,obj_1)
console.log(newObj)
//-----------------------------------------------------------------------------------------
//SEAL METHOD:- WE CAN ONLY INSERT--------
Object.seal(student)

obj.add='HARYANA 122022'
console.log(obj)
const student=new Object()
emp1.empid=20;
//--------------------------------------------------------------------------------------------------------
//FREEZE METHOD--------WE CANNOT PERFORM ANY CRUD OPERATION---------

//IS SEALED-----CHAECK OBJECT IS SEALED OR NOT
//IS FROZEN-----CHECK OBJECT IF FREEZE OR NOT

//HAS OWN PROPERTY----------(camel case)
//---syntax:
//obj.hasOwnProperty('empid');-------RETURN TYPE IS BOOLEAN
//----------------------------------------------------------------------------