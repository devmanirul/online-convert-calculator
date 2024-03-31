const output = document.getElementById("output");

function calculation() {
    const miles = input.value;
    const km = (miles / 1.6093).toFixed(2);

    output.innerText = km;
}