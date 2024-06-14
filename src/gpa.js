function addRow() {
    let table = document.getElementById("dataTable");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = '<input type="number" class="value">';
    cell2.innerHTML = '<input type="number" class="weight">';
}

function deleteRow() {
    let table = document.getElementById("dataTable");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function calculateWeightedAverage() {
    let table = document.getElementById("dataTable");
    let sumValue = 0;
    let sumWeight = 0;
    for (let i = 1; i < table.rows.length; i++) {
        let value = parseFloat(table.rows[i].cells[0].getElementsByTagName("input")[0].value);
        let weight = parseFloat(table.rows[i].cells[1].getElementsByTagName("input")[0].value);
        sumValue += value * weight;
        sumWeight += weight;
    }
    return sumValue / sumWeight;
}

document.getElementById("weightedAverage").innerText = calculateWeightedAverage();
