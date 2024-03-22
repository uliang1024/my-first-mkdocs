let result = "";

function onChange(event) {
    let selectElement = event.target;
    console.log(selectElement.value);
    result = selectElement.value;
    document.getElementById("result").innerText = result;
}

window.onload = function() {
    if (window.location.href.indexOf("/print_page") > -1) {
        window.print();
    }
}