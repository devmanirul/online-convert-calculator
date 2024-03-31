const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const celsius = input.value;
    const fahrenheit = celsius * 9 / 5 + 32;

    output.innerText = fahrenheit;
}