/* assignment 1 */
/*
var num = window.prompt(("write a number"));
console.log(Number(num));
*/

/* assignment 2 */
/*
var num = Number(window.prompt("write a number"));
if(num % 2 == 0){
    console.log("yes");
    }else{
        console.log("no");
}
*/

/* assignment 3 */
/*
var num1 = Number(window.prompt("write a number"));
var num2 = Number(window.prompt("write a number"));
if(num1 > num2){
    console.log(num1);
    }else{
        console.log(num2);
}
*/

/* assignment 4 */
/*
var num = Number(window.prompt("write a number"));
if (num < 0) {
    console.log("negative");
    } else {
        console.log("positive");
}
*/

/* assignment 5 */
/*
var num1 = Number(window.prompt("write a number"));
var num2 = Number(window.prompt("write a number"));
var num3 = Number(window.prompt("write a number"));
if(num1 > num2 && num1 > num3){
    console.log(`max number is ${num1}`);
    }else if(num2 > num1 && num2 > num3){
        console.log(`max number is ${num2}`);
        }else{
            console.log(`max number is ${num3}`);
    }
    if(num1 < num2 && num1 < num3){
        console.log(`min number is ${num1}`);
}else if(num2 < num1 && num2 < num3){
    console.log(`min number is ${num2}`);
    }else{
        console.log(`min number is ${num3}`);
}
*/

/* assignment 6 */
/*
var num = Number(window.prompt("write a number"));
if(num % 2 == 0){
    console.log(`nember ${num} is even`);
    }else{
        console.log(`nember ${num} is odd`);
}
*/

/* assignment 7 */
/*
var char = window.prompt("write a character");
if(char == 'a' || char == 'e' || char == 'I' || char == 'o' || char == 'u'){
    console.log(`character ${char} is vowel`);
    }else{
        console.log(`character ${char} is consonant`);
}
*/

/* assignment 8 */
/*
var num = Number(window.prompt("write a number"));
for(var i = 1 ; i <= num ; i++ ){
    console.log(i);
}
*/

/* assignment 9 */
/*
var num = Number(window.prompt("write a number"));
for(var i = 1 ; i <= 12 ; i++ ){
    console.log(num * i);
    }
*/

/* assignment 10 */
/*
var num = Number(window.prompt("write a number"));
for( var i = 1 ; i <= num ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/

/* assignment 11 */
/*
var num1 = Number(window.prompt("write a number"));
var num2 = Number(window.prompt("write a number"));
var power = 1;
for(var i = 0 ; i < num2 ; i++){
    power *=  num1;
    }
    console.log(power);
    */

/* assignment 12 */
/*
var num1 = Number(window.prompt("write a number"));
var num2 = Number(window.prompt("write a number"));
var num3 = Number(window.prompt("write a number"));
var num4 = Number(window.prompt("write a number"));
var num5 = Number(window.prompt("write a number"));

var total = num1+num2+num3+num4+num5;
console.log(total);
var avr = total / 5;
console.log(avr);
var percentage = (avr / 100) * 100;
console.log(percentage);
*/

/* assignment 13 */
/*
var num = Number(window.prompt("write a number"));
if(num == 4 || num == 6 || num == 9 || num == 11){
    console.log(`month number ${num} has 30 days`);
    }else if(num == 2){
        console.log(`month number ${num} has 29 or 28 days`);
        }else if(num > 12){
            console.log("that's a big year man");
            }else{
                console.log(`month number ${num} has 31 days`);
        };
        */

/* assignment 14 */
/*
       var physics = Number(window.prompt("write a number"));
       var chemistry = Number(window.prompt("write a number"));
       var biology = Number(window.prompt("write a number"));
       var mathematics = Number(window.prompt("write a number"));
       var computer = Number(window.prompt("write a number"));
       var totalPercentage = ((physics + chemistry + biology + mathematics + computer) / 500) * 100;
       
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

/* assignment 15 */
/*
var num = Number(window.prompt("write a number"));
switch (true) {
  case num == 4 || num == 6 || num == 9 || num == 11:
    console.log(`month number ${num} has 30 days`);
    break;
  case num == 2:
    console.log(`month number ${num} has 29 or 28 days`);
    break;
  case num > 12:
    console.log(`that's a big year`);
    break;
  default:
    console.log(`month number ${num} has 31 days`);
};
*/

/* assignment 16 */
/*
var char = window.prompt("write a character");
switch(true){
    case char == 'a' || char == 'e' || char == 'I' || char == 'o' || char == 'u':
    console.log(`character ${char} is vowel`);
    break;
    default :
    console.log(`character ${char} is consonant`);
    break;
};
*/

/* assignment 17 */
/*
var num1 = Number(window.prompt("write a number"));
var num2 = Number(window.prompt("write a number"));
switch(true){
    case num1 > num2:
        console.log(`number ${num1} is bigger`);
        break;
        default:
        console.log(`number ${num2} is bigger`);
};
*/

/* assignment 18 */
/*
var num = Number(window.prompt("write a number"));
switch(true){
    case num % 2 == 0:
        console.log(`number ${num} is even`);
        break;
        default:
        console.log(`number ${num} is odd`);
};
*/

/* assignment 19 */
/*
var num = Number(window.prompt("write a number"));
switch (true) {
  case num == 0:
    console.log("zero");
    break;
  case num < 0:
    console.log("negative");
    break;
    default:
    console.log("positive");
}
*/

/* assignment 20 */
/*
var num1 = Number(window.prompt("write a number"));
var arithOpe = window.prompt("write an arithmatice operator");
var num2 = Number(window.prompt("write a number"));
switch (true) {
  case arithOpe == "+":
    console.log(num1 + num2);
    break;
  case arithOpe == "-":
    console.log(num1 - num2);
    break;
  case arithOpe == "*":
    console.log(num1 * num2);
    break;
  case arithOpe == "/":
    console.log(num1 / num2);
    break;
}
*/