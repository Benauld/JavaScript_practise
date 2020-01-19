// JavaScript source code
var greeting = "Hello World";
window.alert(greeting);
window.console.log(greeting + "I love JS!");

var firstString = "6";
var secondString = "5";
var join = firstString + secondString;
console.log("The value inside join is 2 strings concatenated:" + join + "  data type:" + typeof (join)); //shorthand write - take the window out of console.log

//Data Types: numbers - integers and floats
var firstNum = 6;
var secondNum = 5;
var floatingNum = 2.75;
var sum = firstNum + secondNum + floatingNum;
var thisType = typeof(sum);
console.log("Numbers added: " + sum + " data Type:" + thisType + " Which is a ... Type:" + typeof(thisType));


//Data Types Arrays

var list = new Array(); 
var list = [];
list[0] = "cat";
list[1] = "dog";
list[2] = "fish";
list[3] = 8;
document.write(list);

//var pTxt = document.getElementByTagNanme("p")[0].textcontent;
//console.log(pTxt);



var thisDate = new Date(); // gets date using object notation
console.log(thisDate);
var thisYear = thisDate.getFullYear();
//document.write("<small><time> &copy;"+ thisYear + "</small>")
document.getElementById('placeYear').textContent = thisYear;

function clickMe(x, yearBorn) {
    x.style.background = "yellow";
    var age = thisYear - yearBorn
    return age;
}


//conditional nested statement:

var hours = thisDate.getHours();
var greetBox = document.getElementById("greetToday");
if (hours < 12) {
    greetBox.textContent = "Good Morning";
} else if (hours >= 12 && hours < 18) {
    greetBox.textContent = "Good Afternoon";
} else {
    greetBox.textContent = "Good Evening";
}


//Equality operator
if (firstString == firstNum) {
    console.log("Data is equal in value ==");
} else {
    console.log("Data is not equal in value - data types could be equal ==");
}
if (firstString === firstNum) {
    console.log("Data is either not equal in value or type ===");
} else {
    console.log("either value or type is not equal ===");
}

// ternary statement

var num = 5;
(num % 2 == 0) ? console.log("the value inside" + num + " is even") //if
               : console.log("the value inside" + num + " is odd"); //else

function toggle(x) {
    var ulRef = document.getElementById("ulList");
    var currentText = x.textContent;
    var currentVal = ulRef.style.display;
    if (currentVal == "none" && currentText == "show") {
        ulRef.style.display = "block";
        x.textContent = "hide";
    } else {
        ulRef.style.display = "none";
        x.textContent = "show";
    }
}

//Interactive Loops
//while
var i = 0;
while (i < 10) {
    console.log("I love JavaScript" + i)

    i++;
}
//Do While - always does once
/*
var pass = "password"
do {
    prompt("Enter your password") //technically wondow.prompt but this is a shortcut
} while (pass != valid)
*/

function validateThis() {
    var validPass = "password";
    var inputRef = document.getElementById("validate"); // node ref
    var inputVal = inputRef.value;
    if (inputVal == "") {
        inputRef.style.background = "rgba(255,0,0,.5)";
        document.getElementById("error").textContent = "Please enter a password";
    } else if (inputVal != validPass) {
        inputRef.style.background = "rgba(255,0,0,.5)";
        document.getElementById("error").textContent = "incorrect password";
    } else {
        inputRef.style.background = "transparent";
        document.getElementById("error").textContent = "valid password";
    }
}

function starIt(x) {
    var rawValue = x.value;
    rawValue = "*";
    x.textContent = rawvalue;

}