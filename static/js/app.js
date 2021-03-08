// from data.js
var tableData = data;

// THE CODE 
//  ##### UFO -LEVEL-1 ##### // 

// Append a table to the web page 
var table = d3.select('table')

// table outlook 
table.attr('class', 'table table-striped');

// select table body
var tbody = d3.select('tbody');

// append table row to table body     
//### And make the comparison to your input values using the filter()function  
tableData.forEach((data) => {
    var row = tbody.append('tr');
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// search columns to match user input - listen for events 
// reference the button 
var button = d3.select('#filter-btn');

// reference the input field 
var userInput = d3.select('#form-control');

// create event handlers
button.on('click', handleClick);

// click function 
function handleClick() {
    
    // prevent the page from refreshing 
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select('.form-control');

    // get the value property of the input element
    var inputValue = inputElement.property('value')
    
    console.log(inputValue);
    console.log(tableData);
}


// input field trigger change event - new text entered 
userInput.on('change', function() {
    var newInput = d3.event.target.value;
    console.log(newInput);
});


//  ##### UFO -LEVEL-2 ##### // 
