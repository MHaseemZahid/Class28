// using BODMAS

var BODMAS =1*3+10 ;
console.log(BODMAS);

// ans is 13


var BODMAS1 =(3*3)+(10*100) ;
console.log(BODMAS1);

// ans is 1009


// pre and post 
var number =0 ;
++number;
++number;
++number;
++number;
++number;
++number;
++number;
console.log(number);

// If conditions 
// operators  
// === sign of equal too 
// !== sign of not equal too 
// > sign of greater then 
// >= sign of greater then and equal too
// < sign of less then 
// <= sign of less then and equal too

var num1 =10;

if(num1===10)
    {console.log("your value is 10"); }

//task1  ask City  

var ask_city_name =prompt("Enter city name");

if (ask_city_name==='Karachi') {
    {console.log("Wellcome to city of lights"); }
} else {
    console.log("Wellcome");
}   

//task2  ask number to find even or odd

 var ask_number = +prompt("Enter Your number");

 if (ask_number%2===0) {
     {console.log("Even number"); }
 } else {
     console.log("Odd number");
 }   


//task3 ask number to find Negitive or Positive

var ask_num =+prompt("Enter Your number");

if (ask_num<0) {
    {console.log("Negitive value"); }
} else {
    console.log("Positive value");
}  

//task4 ask age to find Voting Eligible

var ask_age =prompt("Enter Your Age");

if (ask_age<18) {
    {console.log("Not Eligible For Voting"); }
} else {
    console.log("Eligible For Voting");
}   


//task5  ask year to find Leap year

var ask_year =prompt("Enter Your year");

ask_year=(ask_year % 4);

if (ask_year===0) {
    {console.log("Leap year"); }
} else {
    console.log("not Leap year");
}    



//task5  ask char  to find Vowel words

var ask_word =prompt("Enter Your Word");

if (ask_word ==='A') {
    {console.log("Vovil words"); }
}
if (ask_word ==='E') {
    {console.log("Vovil words"); }
}
if (ask_word ==='I') {
    {console.log("Vovil words"); }
}
if (ask_word ==='O') {
    {console.log("Vovil words"); }
} 
if (ask_word ==='U') {
    {console.log("Vovil words"); }
}else {
    console.log("constaint words");
}    