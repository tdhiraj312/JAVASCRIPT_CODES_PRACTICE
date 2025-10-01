const obj1={
    Name:"DHIRAJ",
    EMP_ID:1234,
    SALARY: 40000,
    DEPT_NO:10,
    MGR_NO:"D001"
};
const obj2={
    Name:"RAHUL",
    EMP_ID:2345,
    SALARY: 90000,
    DEPT_NO:20,
    MGR_NO:"D002"
};
const obj3={
    Name:"AMIT",
    EMP_ID:3456,
    SALARY: 750000,
    DEPT_NO:30,
    MGR_NO:"D003"
};

function printdata(a,b,c){
    console.log(a,b,c)
    console.log(this)
    console.log(this.Name)
    console.log(this.EMP_ID)
    console.log(this.SALARY)
    console.log(this.DEPT_NO)
    console.log(this.MGR_NO)
}
// printdata.call(obj1,20,30,40);
// printdata.apply(obj2,[90,80,70]);
printdata.bind(obj3)();
