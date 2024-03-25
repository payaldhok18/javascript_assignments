// 1)take two number a,b and print their sum diiference ,product, quotient and modulus of a and b

// const Input =require("readline-sync");
// let a=Input.question("Enter first number a: ")
// let b=Input.question("Enter second number b: ")
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// ***********************************************************************************************************************************************
// 2) take two numbers and only print the integer part when a is divided by b.

// const Input =require("readline-sync");
// let a=Input.question("Enter first number a: ")
// let b=Input.question("Enter second number b: ")

// method 1
// let intpart=Math.floor(a/b)
// console.log(intpart)

// method 2
// let intpart1=parseInt(a/b)
// console.log(intpart1)

// *************************************************************************************************************************************************
// 3)take two numbers and only print the exponential poer of the first number raised by the second.

// const Input =require("readline-sync");
// let a=Input.question("Enter first number a: ")
// let b=Input.question("Enter second number b: ")
// var result = a ** b;
// console.log(result);

// *******************************************************************************************************************************************************
// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

// const Input =require("readline-sync");
// let a=Input.question("Enter first number a: ")
// let b=Input.question("Enter second number b: ")
// console.log(a%b)

// *****************************************************************************************************************************************************
// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

const Input =require("readline-sync");
let A=parseFloat(Input.question("Enter marks of subject A : "))
let B=parseFloat(Input.question("Enter marks of subject B : "))
let C=parseFloat(Input.question("Enter marks of subject C : "))
let D=parseFloat(Input.question("Enter marks of subject D : "))
let E=parseFloat(Input.question("Enter marks of subject E : "))
let average=A+B+C+D+E;
console.log(average/5)

// *********************************************************************************************************************************************************
// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.

// const Input =require("readline-sync");
// let cost=Input.question("Enter cost price: ")
// let selling=Input.question("Enter selling price: ")
// let profit = selling-cost;
// console.log("profit:", profit)

// ********************************************************************************************************************************************************
// 7. Take a number and print out the last digit of the number.

// const Input =require("readline-sync");
// let a=Input.question("Enter number a: ")
// let lastdigit=a%10;
// console.log(lastdigit)

// ****************************************************************************************************************************************************************
// 8.Take a 2 digit number and return the first and last digits.

// const Input =require("readline-sync");
// let a=Input.question("Enter number a: ")
// let firstdigit=Math.floor(a/10);
// let lastdigit=a%10;
// console.log("firstdigit : ",firstdigit , "lastdigit :", lastdigit);

// *************************************************************************************************************************************************************
// 9. Write a JavaScript program to find the largest of three numbers.

// const Input =require("readline-sync");
// let a=Input.question("Enter first number a: ")
// let b=Input.question("Enter second number b: ")
// let c=Input.question("Enter thied number c: ")
// if (a>=b){
//     if (a>=c){
//         console.log(a)
//     }
//     else{
//         console.log(c)
//     }
// }
// else{
//     if (b>=c){
//         console.log(b)
//     }
//     else{
//         console.log(c)
//     }
// }

// ****************************************************************************************************************************************************************
// 10. Write a JavaScript program to check whether a number is even or odd.
// const Input =require("readline-sync");
// let a=Input.question("Enter number a: ")
// if (a%2==0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// *****************************************************************************************************************************************************************
// 11. Write a JavaScript program to check whether a given number is prime or not.

// const Input =require("readline-sync");
// let a=Input.question("Enter number a: ")
// let c=0;
// for( let i=1;i<=a;i++){
//     if (a%i==0){
//         c++;
//     }
// }
// if (c==2){
//     console.log("Is Prime")
// }
// else{
//     console.log("Not Prime")
// }

// **********************************************************************************************************************************************************
// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

// const Input =require("readline-sync");
// let temp=Input.question("Enter temperature: ")
// let Celsius_to_Fahrenheit=(temp*9/5)+32;
// let Fahrenheit_to_Celsius=(Celsius_to_Fahrenheit-32)*5/9;
// console.log(Celsius_to_Fahrenheit);
// console.log(Fahrenheit_to_Celsius);

// *******************************************************************************************************************************************************

