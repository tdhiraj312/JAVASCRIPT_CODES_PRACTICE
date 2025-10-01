const age=prompt("Enter Your Age");

switch(true)
{
    case(age<=10):
    console.log("Go to Nursery")
    break;
    case(age>10 && age<=15):
    console.log("Go to School")
    break;
    case(age>15 && age<=20):
    console.log("Go to College")
    break;
    case(age>20 && age<=25):
    console.log("Come to Qspiders")
    break;
    case(age>25 && age<=30):
    console.log("Get Marry")
    break;
    case(age>30 && age<=35):
    console.log("Gets become parents")
    break;
    case(age>35 && age<=40):
    console.log("Be ready to pays the fees")
    break;
     case(age>40 && age<=70):
    console.log("Rest In Peace")
    break;
    default:
        console.log("Enter valid Numbers")

}