// JavaScript source code
var counter = 0; //global variable
var round = document.getElementById("add-round-widget"); //elem ref
round.onclick = function () {
    addToTable("round", 2.99, .99);
};
var square = document.getElementById("add-square-widget"); //elem ref
square.onclick = function () {
    addToTable("square", 5.39, 1.39);
};
var tri = document.getElementById("add-triangle-widget"); //elem ref
tri.onclick = function () {
    addToTable("tri", 4.98, 1.99);
};

function addToTable(title, price, shipping) {
    //creates empty elements 
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");

    //append data
    col1.appendChild(document.createTextNode(title));
    col2.appendChild(document.createTextNode(price));
    col3.appendChild(document.createTextNode(shipping));
    var subtotal = price + shipping;
    col4.appendChild(document.createTextNode(subtotal.toFixed(2)));

    // append column to row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    //appends constructed rows
    document.getElementById('basket-products').appendChild(row);

    //appends the subtotal to itself starting from zero
    var total = counter += subtotal;
    document.getElementById('basket-total').textContent = total.toFixed(2);

}

