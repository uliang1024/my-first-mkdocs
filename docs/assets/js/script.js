let result = "";

function onChange(event) {
    let selectElement = event.target;
    console.log(selectElement.value);
    result = selectElement.value;
    document.getElementById("result").innerText = result;
}
