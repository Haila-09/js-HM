
// Question number one

var title = "Welcom to My JavaScript Lesson";

console.log(title.length);
console.log(title.slice(0,12));
console.log(title.toUpperCase());
console.log(title.toLowerCase());
console.log(title.replace("Welcom" , "Hello"));
console.log(typeof title);
title = title.split(" ");
console.log(title.reverse().join(" "))

// Question number two

 let fristNumber = 10;
 let secondNumber = 20;
 let thirdNumber = 30;

 console.log(Math.max(fristNumber , secondNumber ,thirdNumber));
 console.log(Math.min(fristNumber , secondNumber ,thirdNumber));
 console.log(secondNumber === thirdNumber)
 console.log(secondNumber !== thirdNumber)
 console.log(fristNumber == thirdNumber)

 // Question number three
// let year = 1900;
let year = 1904;
// let year = 2000;
// let year = 2023;
 if(year % 4 == 0 && year / 100 != 0){
    console.log("This year is leap year")
 }
 else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
    console.log("This year is leap year")

 }
 else if (year % 4 !== 0 && year % 100 !== 0 && year % 400 !== 0){
    console.log("This year is not leap year")
 }

 // Question number four

 let num = 41;
 if(num % 2 == 0 ){
    console.log("The number is even")
 }
  else if (num % 2 !== 0 ){
    console.log("The number is odd")
 }

  // Question number five

  let heightOfPerson = 170;
  let convertHeightToM = 1.7;
  let weightOfPerson = 50;

  let result = weightOfPerson /(convertHeightToM)**2;
  console.log(Number(result.toFixed(2)));

  if(result < 15 ){
    console.log("very severe Weight loss");
  }
  else if(result >= 15 && result <= 16){
    console.log("severe Weight loss");
  }
  else if(result >= 16 && result <= 18.5){
    console.log("Weight loss");
  }
  
  else if(result >= 25 && result <= 30){
    console.log("Increase in weight");
  }
  else if(result >= 30 && result <= 35){
    console.log("Obesity frist degree ");
  }
  else if(result >= 35 && result <= 40){
    console.log("Obesity second degree ");
  }
  else if(result > 40 ){
    console.log("severe obesity");
  }
    // Question number six
 
    var shirtWidth = 23;
    var shirtLength = 30;
    var shirtSleeve = 8.71;

    if (shirtWidth < 23 && shirtLength < 26 && shirtSleeve < 8.71){
        console.log("This small")
    }
    else if(shirtWidth <= 26 && shirtLength >= 30 && shirtSleeve <= 16.6){
        console.log("This medium")
    }
    else if(shirtWidth <= 26.8 || shirtLength > 33 && shirtSleeve <= 18.1){
        console.log("This Large")
    }
    else if(shirtWidth <= 27.2 && shirtLength >= 33.6 && shirtSleeve <= 18.9){
        console.log("This X-Large")
    }
    else if(shirtWidth == 28.0 || shirtLength >= 40.3 || shirtSleeve <= 20.1){
        console.log("This 2X-Large")
    }
    else if(shirtWidth == 29.6 && shirtLength >= 44.4 && shirtSleeve <= 20.9){
        console.log("This 3X-Large")
    }



