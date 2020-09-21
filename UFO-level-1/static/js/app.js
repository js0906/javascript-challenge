// from data.js
var tableData = data;
//create destination
var tbody = d3.select("tbody");

console.log(data);

// console.log(inputValue);
// console.log(typeof(inputValue))

// YOUR CODE HERE!
data.forEach((ufoSightings) => {
    console.log(ufoSightings);
    //console.log(typeof(ufoSightings[0]["datetime"]))
    var row = tbody.append("tr");


    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the buttons
var filterButton = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the filter button
filterButton.on("click", function () {
    //alert("event listener fired")

    //   // call on the html to link to the data and print in the destination
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Call the custom function with filter()

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    //create filter 
    var filteredData = data.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);



    // print out the filtered dates in the webpage
    filteredData.forEach(function (filterDate) {
        console.log(filterDate);
        var row = tbody.append("tr");

        Object.entries(filterDate).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});





