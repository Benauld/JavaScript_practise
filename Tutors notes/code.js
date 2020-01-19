var greeting = 'Hello world';
//a variable is a temp box that can hold data can receive this data by being assigned some value with assignment operator '='

window.alert(greeting);
//references the window object and passes this object an alert method (internal function) that pops a modal window on the load of this window with a message inside. The data type inside the alert method is string data. Any value inside quotation marks is seen as a text value, which means even if the data is a number, we cannot perform arithmetic operations on this data. You can shorthand the alert method to not include the parent object ref like so: alert(greeting);

window.console.log(greeting + ' I love js!');
//references the window object which handles the load of the window. Then we pass this object a property called console which then calls the log method to log data within the console debugger.



//DATA TYPES: strings (text data)
var firstString = '6'; //string/text value
var secondString = '5'; //string/text value
var join = firstString + secondString; //joins strings together
console.log('The values inside the firstString and secondString variables joined produce ' + join + ' and its data type is ' + typeof(join));
//The example shown above holds to string values inside 2 variables. Then we create a variable called 'join' which then joins the values side by side using a plus sign to join them. Then we output the data to the console.log, which joins the data with the unary operator that is used to get the data type inside the 'join' variable.


//DATA TYPES: numbers: intergers (whole numbers) and floats (decimal point numbers)
var firstNum = 6;
var convertString = String(firstNum);
console.log(typeof(convertString));
var secondNum = 5;
var floatingNum = 2.75;
var sum = firstNum + secondNum + floatingNum;
var thisType = typeof(sum);
console.log('The data inside the variables is added and produces ' + sum + ' and it\'s data type is ' + thisType);

//JS is a lose typed language. Traditionally in most programming languages, you would need to convert the output data to the same data type. In JS you can losely join different data types together. It is a lose typed language!

//FIRST OBJECT: the date
var thisDate = new Date(); 
//gets date using object notation using the new keyword to create this object and passes it to a thisDate variable.

console.log(thisDate);
var thisYear = thisDate.getFullYear();
//document.write('<small><time> &copy;' + thisYear + '</time></small>');
document.getElementById('placeYear').textContent = thisYear;
//targets the document object (page hierachacy), and passes this object a built in search method that fetches an element via its assigned id value. We then write to it using a textContent property which is used to get text from an element or assign it a new value using the assignment operator '='.


function clickedMe(y, yearBorn){
    y.style.background = 'yellow';
    var age = thisYear -  yearBorn;
    console.log(age);
    return; //the return keyword is used to return the data back to the DOM and stops the programming flow from reading below the 'return' keyword
    var sum=  6+ 5;
}
//The example shown above creates a man made function using the function keyword. You then pass this function a parameter (temp variable) that gets data when you call this function some time later. The function is being called via a click event through a HTML onclick attribute which is passed the 'this' keyword inside the called function to target the owner of this function, which is the <time> tag itself, the owner of this function. The x parameter targets the element (owner of function) and is passed a style property which calls the css library and calls the bakcground library within it and assigns a colour value.

//DATA TYPES: arrays/lists
var cars = ['audi', 'Toyota', 'mercedes', 5, 'Porsche']; //list containing 5 values
console.log('The array contains these values: ' + cars); //output
var list = []; //creates an empty array with no values (operator notation)
var list = new Array(); //object notation that created an empty array
list[0] = 'new added value'; // sets first value inside empty array using index ref
list[1] = 'another value';
var reversed = cars.reverse();
var sorted = cars.sort();
console.log(sorted);
//Arrays hold a list of values and have a zero based index. In the example shown above, we create  an array called 'cars' that hold a list of values separated with a comma. We then output the results by passing the data to the console.log. The second example, creates an empty array/list in 2 different formats. The first one is being created using the operator notation, the second uses the object notation to create it. Any object in JS can be created using the 'new' keyword and the name of the object following. Arrays have a zero based index which means the first value can be referenced through its index or set through its index. Use the assignment operator '=' to assign the array its value just like variables.


var pRef = document.getElementsByTagName('p')[0];
var pTxt = pRef.textContent;
//references the document object/page and passes it a proprietary search method to find all p tags inside the page that will return as a list of p tags that can be further operated on. We use the array/list reference to target the first p tag inside the list of p tags. the textContent property is then passed to the first tag to get its current text. the information is then passed to the window object for output. textContent is a property used to get an element's current text or assign it a new value using the assignment operator '=' . textContent does NOT append or add to an element's current value, it will just replace it with a new value.

console.log(pTxt);

pRef.style.color = 'orange';
//style is a property that is used to fetch the CSS library inside JS. Then we can call properties inside the CSS libray. Note not all properties inside the new CSS3 release are supported using this style property. Use the classList.add() method instead so that you can call a class inside your CSS doc.
pRef.classList.add('moreStyles');
//classList is a property, that gets a list of existing classes. add is a method that adds a reference to this class and passes it to an element.

var listOfPTags = document.getElementsByTagName('p'); //returns a node list of all p tags on the page
for(var i = 0; i < listOfPTags.length; i+=1 ) {
    listOfPTags[i].style.color = 'orange';
}
//length is a property used to return the number of items inside an array or string. In the example shown above, we use a looping method so that we can read all p tags inside the list of p tags. The condition inside the for loop, initialises a variable 'i' to zero. Then we test if zero is less than how many p tags inside the list of p tags; this sets the cap to this loop. Then we increment zero by one. The first p tag is then read and styled with css and 'i' gets incremented by one. Then 1 is still less than how many p tags inside the page and until you reach how many p tags on the page after incrementing the variable one by one, the p tags are styled with css.

var string = new String();
var string = '';
string = 'value';
console.log(string)


var num = new Number();
num = 5;

var hours = thisDate.getHours(); //returns a value 0 - 23 indicating the hour
var greetBox = document.getElementById('greetToday'); //node global variable ref 
if(hours < 12) {
  greetBox.textContent = 'Good morning';
}else if (hours >= 12 && hours < 18) {
    greetBox.textContent = 'Good afternoon';      
}else if (hours >= 18 && hours < 21){
    greetBox.textContent = 'Good evening';     
}else{
    greetBox.textContent = 'Good night';    
}

//This example is a conditional nested  statement which tests firstly one condition and if it true then the body first if executes. If not the else if condition is then tested next which tests if 2 conditions are true using the logical AND operator. If this condition is true, then the body of the else if executes. If none of the conditions tested within the first if and else if, then the body of the else condition executes as a fallback statement.

//USING EQUALITY OPERATOR: == or ==== (strict)

if(firstString === firstNum){
    console.log('The data is ONLY equal in value, not both type and value');
}else{
   console.log('They are not strictly equal in both type and value. Use tripple equal sign'); 
}
//The condition uses the equality operator to check if the value held inside the variable 'firstString' is equal to the value held inside the 'firstNum' variable. The values match since the doiuble equal sign ONLY checks the value, not both type and value. Make sure to use the tripple equal sign '===' to compare both type and value.

var num = 7;
if(num % 2 == 0){
   console.log('The value inside ' + num + ' is even');
}else{
    console.log('The value inside ' + num + ' is odd');
}
//EXAMPLE OF TERNARY STATEMENT:
//(CONDITION)? STATEMENT : STATEMENT
(num % 2 == 0) ? //if
console.log('The value inside ' + num + ' is even') : //else
console.log('The value inside ' + num + ' is odd');

var a = 1;
a+=1;
a+=3;
console.log(a);

//SIMPLE HIDE AND SHOW
function toggle(x) {
    var ulRef = document.getElementById('ulList'); //node ref
    var currentText = x.textContent;
    var currentVal = ulRef.style.display;
    if(currentVal == 'none' && currentText == 'show') {
        x.textContent = 'hide';
       ulRef.style.display = 'block';
    }else {
        x.textContent = 'show';
        ulRef.style.display = 'none';
    }
}













