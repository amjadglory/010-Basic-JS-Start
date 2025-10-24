/* assignment 1 :
Write a program that allow to user enter number then print it 
Example 
Input: 5 
Output: 5
*/
/*
var num = window.prompt(("write a number"));
console.log(Number(num));
*/

/* assignment 2 :
Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no 
Example1 
Input: 12 Output Yes 
Example 2 
Input: 9 Output No 
*/
/*
var num2 = Number(window.prompt("write a number"));
if (num2 % 3 === 0 && num2 % 4 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
*/

/* assignment 3 
Write a program that allows the user to insert 2 integers then print the max 
Example1 
Input: 3 5 
Output: 5 
Example 2 
Input: 10 7 
Output: 10
*/
/*
var num3 = Number(window.prompt("write a number"));
var num4 = Number(window.prompt("write a number"));
if(num3 > num4){
    console.log(num3 + 'is bigger');
    }else{
        console.log(num4 + 'is bigger');
}
*/

/* assignment 4 
Write a program that allows the user to insert an integer then print negative if it is 
negative number otherwise print positive. 
Example 1 
Input: -5 
Output negative 
Example2 
Input: 10  
Output positive
*/
/*
var num5 = Number(window.prompt("write a number"));
if (num5 < 0) {
    console.log("negative");
    } else {
        console.log("positive");
}
*/

/* assignment 5 
Write a program that take 3 integers from user then print the max element 
and the min element. 
Example 1 
   Input:7,8,5 
Output: 
max element = 8  
min element = 5  
Example2 
Input: 3 6 9 
Outputs: 
Max element = 9 
Min element = 3
*/
/*
var num6 = Number(window.prompt("write a number"));
var num7 = Number(window.prompt("write a number"));
var num8 = Number(window.prompt("write a number"));
if (num6 > num7 && num6 > num8) {
  console.log(`max number is ${num6}`);
} else if (num7 > num6 && num7 > num8) {
  console.log(`max number is ${num7}`);
} else {
  console.log(`max number is ${num8}`);
}
if (num6 < num7 && num6 < num8) {
  console.log(`min number is ${num6}`);
} else if (num7 < num6 && num7 < num8) {
  console.log(`min number is ${num7}`);
} else {
  console.log(`min number is ${num8}`);
}
 */

/* assignment 6 
Write a program that allows the user to insert integer number then 
 check If a number is oven or odd 
Example 1 
Input: 8  
Output: even 
 Example 2 
Input: 7 
 Output: odd 
*/
/*
var num9 = Number(window.prompt("write a number"));
if (num9 % 2 == 0) {
  console.log(`nember ${num9} is even`);
} else {
  console.log(`nember ${num9} is odd`);
}
*/

/* assignment 7 
Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant 
Example1 
Input: O 
 Output: vowel  
Example 2 
Input: b 
Output: 
 Consonant
*/
/*
var char = window.prompt("write a character");
if (char == "a" || char == "e" || char == "I" || char == "o" || char == "u") {
  console.log(`character ${char} is vowel`);
} else {
  console.log(`character ${char} is consonant`);
}
 */

/* assignment 8 
Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number 
Example Input 5 
Output 1, 2, 3, 4, 5
*/
/*
var num10 = Number(window.prompt("write a number"));
for(var i = 1 ; i <= num10 ; i++ ){
    console.log(i);
}
*/

/* assignment 9 
Write a program that allows user to insert integer then print a multiplication table up to 12. 
Example 
Input: 5 
Outputs: 
5 10 15 20 25 30 35 40 45 50 55 60
*/
/*
var num11 = Number(window.prompt("write a number"));
for(var i = 1 ; i <= 12 ; i++ ){
    console.log(num11 * i);
    }
*/

/* assignment 10 
 Write a program that allows to user to insert number then print all even numbers 
between 1 to this number 
Example: 
Input: 15 
*/
/*
var num12 = Number(window.prompt("write a number"));
for( var i = 0 ; i <= num12 ; i += 2){
        console.log(i);
}
*/

/* assignment 11 
Write a program that take two integers then print the power 
Example: 
Input: 4 3 
Output:  64 
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/
/*
var num13 = Number(window.prompt("write a number"));
var num14 = Number(window.prompt("write a number"));
var power = 1;
for (var i = 0; i < num14; i++) {
  power *= num13;
}
console.log(power);
 */

/* assignment 12 
 Write a program to enter marks of five subjects and calculate total, average and 
percentage. 
         Example 
Input: - Enter Marks of five subjects: 
 
95 
76 
58 
90 
89 
 
Output:-.Total marks = 435 
                 Average Marks =87 
   Percentage =87 
*/
/*
var num15 = Number(window.prompt("write a number"));
var num16 = Number(window.prompt("write a number"));
var num17 = Number(window.prompt("write a number"));
var num18 = Number(window.prompt("write a number"));
var num19 = Number(window.prompt("write a number"));

var total = num15 + num16 + num17 + num18 + num19;
console.log('total ' + total);
var avr = total / 5;
console.log('avr '+avr);
var percentage = (avr / 100) * 100;
console.log('percentage '+percentage);
*/

/* assignment 13 
Write a program to input month number and print number of days in that 
month. 
Example: 
Input: - Month Number: 1 
       Output:-.  Days in Month: 31 
*/
/*
var num20 = Number(window.prompt("write a number"));
if (num20 == 4 || num20 == 6 || num20 == 9 || num20 == 11) {
  console.log(`month number ${num20} has 30 days`);
} else if (num20 == 2) {
  console.log(`month number ${num20} has 29 or 28 days`);
} else if (num20 > 12) {
  console.log("that's a big year man");
} else {
  console.log(`month number ${num20} has 31 days`);
}
 */

/* assignment 14 
Write a program to input marks of five subjects 
Physics, Chemistry, Biology, Mathematics and Computer 
  , Find percentage and grade  
 
Percentage >= 90%: Grad A 
Percentage >= 80%: Grad B 
Percentage >= 70%: Grad C 
Percentage >= 60%: Grad D 
Percentage >= 40%: Grad E 
Percentage < 40%: Grad F
*/
/*
var physics = Number(window.prompt("write a number"));
var chemistry = Number(window.prompt("write a number"));
var biology = Number(window.prompt("write a number"));
var mathematics = Number(window.prompt("write a number"));
var computer = Number(window.prompt("write a number"));
var totalPercentage =
  ((physics + chemistry + biology + mathematics + computer) / 500) * 100;

if (totalPercentage >= 0 && totalPercentage < 40) {
  console.log("Grad F");
} else if (totalPercentage >= 40 && totalPercentage < 60) {
  console.log("Grad E");
} else if (totalPercentage >= 60 && totalPercentage < 70) {
  console.log("Grad D");
} else if (totalPercentage >= 70 && totalPercentage < 80) {
  console.log("Grad C");
} else if (totalPercentage >= 80 && totalPercentage < 90) {
  console.log("Grad B");
} else if (totalPercentage >= 90 && totalPercentage <= 100) {
  console.log("Grad A");
}
 */

// switch

/* assignment 15 
Write a program to print total number of days in month
*/
/*
var num21 = Number(window.prompt("write a number"));
switch (true) {
  case num21 == 4 || num21 == 6 || num21 == 9 || num21 == 11:
    console.log(`month number ${num21} has 30 days`);
    break;
  case num21 == 2:
    console.log(`month number ${num21} has 29 or 28 days`);
    break;
  case num21 > 12:
    console.log(`that's a big year`);
    break;
  default:
    console.log(`month number ${num21} has 31 days`);
};
*/

/* assignment 16 
Write a program to check whether an alphabet is vowel or consonant 
*/
/*
var char2 = window.prompt("write a character");
switch(true){
    case char2 == 'a' || char2 == 'e' || char2 == 'I' || char2 == 'o' || char2 == 'u':
    console.log(`character ${char2} is vowel`);
    break;
    default :
    console.log(`character ${char2} is consonant`);
    break;
};
*/

/* assignment 17 
 Write a program to find maximum between two numbers  
 */
/*
var num22 = Number(window.prompt("write a number"));
var num23 = Number(window.prompt("write a number"));
switch(true){
    case num22 > num23:
        console.log(`number ${num1} is bigger`);
        break;
        default:
        console.log(`number ${num23} is bigger`);
};
*/

/* assignment 18 
Write a program to check whether a number is even or odd
*/
/*
var num24 = Number(window.prompt("write a number"));
switch(true){
    case num24 % 2 == 0:
        console.log(`number ${num24} is even`);
        break;
        default:
        console.log(`number ${num24} is odd`);
};
*/

/* assignment 19 
Write a program to check whether a number is positive or negative or zero
*/
/*
var num25 = Number(window.prompt("write a number"));
switch (true) {
  case num25 == 0:
    console.log("zero");
    break;
  case num25 < 0:
    console.log("negative");
    break;
    default:
    console.log("positive");
}
*/

/* assignment 20 
Write a program to create Simple Calculator
*/
/*
var num26 = Number(window.prompt("write a number"));
var arithOpe = window.prompt("write an arithmatice operator");
var num27 = Number(window.prompt("write a number"));
switch (true) {
  case arithOpe == "+":
    console.log(num26 + num27);
    break;
  case arithOpe == "-":
    console.log(num26 - num27);
    break;
  case arithOpe == "*":
    console.log(num26 * num27);
    break;
  case arithOpe == "/":
    console.log(num26 / num27);
    break;
}
*/
