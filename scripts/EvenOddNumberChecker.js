const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const myNumber = input.value;
    // const output = input % 2 == 0;
    if (myNumber % 2 == 0) {
        output.innerText = "Even Number";
    }
    else {
        output.innerText = "Odd Number";
    }
};