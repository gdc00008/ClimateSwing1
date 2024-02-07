// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updateDates() {
    // Get all table cells with the class "date-cell"
    var dateCells = document.querySelectorAll(".date-cell");

    // Loop through each date cell and update its content
    dateCells.forEach(function (cell) {
        // Get the current date and format it
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        // Update the content of the current date cell
        cell.textContent = formattedDate;
    });
}

// Call the function to update the dates when the page loads
window.onload = function () {
    updateDates();
};
