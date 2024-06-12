document.addEventListener('DOMContentLoaded', function() {
    // Select the display element
    var display = document.getElementById('display');

    // Function to append a value to the display
    window.appendToDisplay = function(value) {
        display.value += value;
    };

    // Function to calculate and display the result
    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    };

    // Function to clear the display
    window.clearDisplay = function() {
        display.value = '';
    };

    // Function to delete the last character in the display
    window.deleteNumber = function() {
        display.value = display.value.slice(0, -1);
    };
});


