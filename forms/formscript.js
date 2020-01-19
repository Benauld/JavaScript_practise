// JavaScript source code



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
var form = document.personal;

// targeting the event
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    // targets the submit event via the placed parameter "evt" used to target the event itself
    // The preventDefault method is passed to the event to stop the event from performing event function
    var name = form.yourName;
    var address = form.address;
    var city = form.city;
    var listNames = [name, address, city];
    var namesResult = '';
    for (var i = 0; i < listNames.length; i++) {
        if (listNames[i].value != "") {
            if (namesResult == "") {
                namesResult = listNames[i].value;
            } else {
                namesResult = namesResult + ", " + listNames[i].value;
            }
        }
        document.getElementById("textResults").textContent = namesResult;
    }
  // select Box
    var selectVal = form.selectBox.value;
    document.getElementById("selectResults").textContent = selectVal;

    // Radio Box
    var radioBoxes = form.s_method;
    for (var i = 0; i < radioBoxes.length; i++) {
        if (radioBoxes[i].checked == true) {
            document.getElementById("radioResults").textContent = radioBoxes[i].value;
        }
    }

    // Check Radio Box
    var checkBoxes = form.credits;
    var checkResults = "";
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            if (checkResults == "") {
                checkResults = checkBoxes[i].value;
            } else {
                checkResults = checkResults + " " + checkBoxes[i].value;
            }
        }
        document.getElementById("checkResults").textContent = checkResults;
    }
  

}) // end of Submit

function onBlurring(x) {
    x.style.background = "transparent";
}

function onFocusing(y) {
    y.style.background = "yellow";
}