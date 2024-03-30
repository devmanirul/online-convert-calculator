const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const miles = input.value;
    const km = miles / 1.6093;

    output.innerText = km;
}