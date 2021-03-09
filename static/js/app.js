// from data.js
var tableData = data;

// THE CODE 
//  ##### UFO -LEVEL-1 ##### // 

// select table body
var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html('');

    // append table row to table body     
    //### And make the comparison to your input values using the filter()function  
    data.forEach((rowData) => {
        var row = tbody.append('tr');
        Object.values(rowData).forEach((value) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });
};

// search columns to match user input - listen for events 
// reference the button 
var button = d3.select('#filter-btn');

// reference the input field 
var userInput = d3.select('.form-control');

// click function 
function handleClick() {
    
    // prevent the page from refreshing 
    d3.event.preventDefault();

    var date = d3.select('#datetime').property('value'); 
    let filteredData = tableData; 

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        };
    buildTable(filteredData);
}

d3.selectAll('#filter-btn').on('click', handleClick);
buildTable(tableData);
