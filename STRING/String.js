//---------------------------STRING LENGTH METHOD--------------------------
// let b=[10,20,'hello','30',40,70]
// console.log(b.length)
// let c='hello';
// console.log(c.length)

//--------------------------STRING SLICE----------------------------
//It will not affect to the existing string-------------
//SAME LIKE SLICE IN ARRAY------------------------------------------

//---------------------------STRING SUBSTRING-----------
//-----IT WILL NOT ACCEPT NEGATIVE VALUE-----------
// let ab="QSPIDERS IS A TRAINING INSTUTUTE";
// console.log(ab.substring("abc",20));
//---------------------------------------------------------------------------------------------------

//----------------------------STRING REPLACE-------------------------------
// let a="QSPIDERS IS A TRAINING INSTUTUTE";

// console.log(a.replace ("S","D"))
// console.log(a);

//It is use to replace the character in given string .
//It will not affect theh existing string.
//It will only reflect the figrst occurance.

//----------------------------STRING REPLACE ALL--------------------------------------
// let a="QSPIDERS IS A TRAINING INSTUTUTE";

// console.log(a.replaceAll ("S","D"))
// console.log(a);

//It will not affect the original string
//It will not check the occurance of characters it will reaplace all..........

//-------------------------------STRING UPPERCASE/LOWERCASE------------------------
// let a="Qspiders is a training institute ";

// console.log(a.toUpperCase())
// console.log(a);

//----------------------------STRING CONCAT-------------------------------
// let a="Qspiders is a training institute ";

// console.log(a.concat("DHIRAJ"))
// console.log(a);

//--------------------------STRING TRIM/TRIM_START/TRIM_END-------------------------------
// let a="Qspiders is a training institute";
//REMOVES ONLY THE STARTING AND ENDING SPACE

// console.log(a.trimEnd())
// console.log(a);

//---------------------------STRING PADSTART/PADEND-------------------------------------------------------------------
// let a="9383299845";
// //Give the format hidden like ************6543/8368************
// //it is only used with string
// let part=a.slice(3,6)
// console.log(part.padStart(6,'*'))

// let part_2=a.slice(6)
// console.log(part_2.padEnd(3,'*'))

// console.log(a.concat(part,part_2))
// console.log(a);
//----------------------------------------------------------------------------------------------------------------
//--------------------------STRING CHAR AT/at/charcodeat--------------------------------
// let ab="HEllo"
// console.log(ab.charAt(2));  //It will not accept negative index
//-------------------------------------------------------------------------------
// let a="HEllo"
// console.log(String.fromCharCode(101));  //It can accept the neagtive and positive index values

//

//(String.CharCode)------------will return the ASCII values..........
//---------------------------------------------------------------------------------------------------------

//----------------------------String Splite------------------------------
//JOINS It will convert the String into array [ ] it will be consideres as only one element-----------------------------------------------------------
//Empty string will seperate all the elements in array("")
//it will seperate the string with comma(,)--------syntax--("-")------input: "he-ll-o"

// let ab="He-ll-o"
// console.log(ab.split("-")); 
//----------------------------------------------------------------------------------------------------

let emp={
    empName:'smith',
    empId:20,
    wedding: function abc (){
        // console.log(this)
        return this.empName;
    },
    study: ()=>{
        return this.empName;
    }
}
// emp.wedding();
// emp.study();
// console.log(emp.wedding);
 console.log(emp.wedding());
 console.log(emp.study())
//this keyword is not used in arrow function............................................................
