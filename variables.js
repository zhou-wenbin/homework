/*
Let is block scope, 
which means it only works in that block,
if you are outside of the block 
then you are not able to get access to the varibale

*/


function randomFunction2(){
   let mydog;
	if (true);{
	var mycat = "neo" 
	mydog="charlie"
	}
console.log(mycat) // here you cannot access to the block where mycat is defined 
// if you change let to var it will work
console.log(mydog)
}

randomFunction2(); 

//const vs let
/*
const is also block scoped variable,
the main difference is that, you can reassign a value to let
 but cannot reassign a value to const. 
 you cannot overwrite a variable if define by const

*/
/* const is like a pointer to a specific variable, you can 
really push values to the variable you defined by const, 
but you just cannot overwrite a variable 

*/

const aArray =[1,2,3];
console.log(aArray);
aArray.push(4);
console.log(aArray);










