// this function working for Celsius to Fahrenheit count
function findFahrenheit() {
    let Celsius = document.getElementById('input-one').value;

    let Fahrenheit = (Celsius * 9 / 5) + 32;
    console.log(Fahrenheit);

    let output = document.getElementById('output-one');
    output.textContent = Fahrenheit;
}

function resetFahrenheit() {
    // Reset the input fields
    document.getElementById('input-one').value = '';

    let output = document.getElementById('output-one');
    output.textContent = '';
}


// this function working for Fahrenheit to Celsius  count
function findCelsius() {
    let Fahrenheit = document.getElementById('input-two').value

    let Celsius = (Fahrenheit - 32) * 5 / 9
    console.log(Celsius)

    let output = document.getElementById('output-two')
    output.textContent = Celsius


}

function resetCelsius() {
    // Reset the input fields
    document.getElementById('input-two').value = '';

    let output = document.getElementById('output-two')
    output.textContent = ''
}
