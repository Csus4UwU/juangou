function addRow() {
    let table = document.getElementById("dataTable");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = '<input type="number" class="credit">';
    cell2.innerHTML = '<input type="number" class="point">';
}

function deleteRow() {
    let table = document.getElementById("dataTable");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function GpaCalculate() {
    let table = document.getElementById("dataTable");

    return table.rows.document;
}

document.getElementById("weightedAverage").innerText = GpaCalculate();
