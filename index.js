const dscc = require('@google/dscc'); // Looker Studio API

// Function to process data from Looker Studio
function processData(data) {
    const table = data.tables.DEFAULT;
    const values = table.rows;

    // Map the data dynamically from Looker Studio
    document.getElementById("spend3").innerText = `$${values[0][0]}`;
    document.getElementById("leads3").innerText = values[0][1];
    document.getElementById("conv3").innerText = `${values[0][2]}%`;

    document.getElementById("spend7").innerText = `$${values[1][0]}`;
    document.getElementById("leads7").innerText = values[1][1];
    document.getElementById("conv7").innerText = `${values[1][2]}%`;

    document.getElementById("spend30").innerText = `$${values[2][0]}`;
    document.getElementById("leads30").innerText = values[2][1];
    document.getElementById("conv30").innerText = `${values[2][2]}%`;
}

// Subscribe to Looker Studio data updates
dscc.subscribeToData(processData, {transform: dscc.objectTransform});