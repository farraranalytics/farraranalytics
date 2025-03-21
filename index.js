const dscc = require('@google/dscc'); // Looker Studio API

// Function to process Looker Studio data
function processData(data) {
    const table = data.tables.DEFAULT;
    const values = table.rows;

    // 🔹 Make sure these field names match exactly with your Looker Studio data source
    document.getElementById("spend3").innerText = `$${values[37}`; // Spend_3_Day
    document.getElementById("leads3").innerText = values[14]; // Leads_3_Day
    document.getElementById("cpl3").innerText = `$${values[0][2]}`; // CPL_3_Day
    document.getElementById("prepays3").innerText = values[0][3]; // Prepays_3_Day
    document.getElementById("cash3").innerText = `$${values[0][4]}`; // Cash_3_Day
    document.getElementById("cpp3").innerText = `$${values[0][5]}`; // CPP_3_Day
    document.getElementById("conv3").innerText = `${values[0][6]}%`; // Conversion_Rate_3_Day

    document.getElementById("spend7").innerText = `$${values[1][0]}`; // Spend_7_Day
    document.getElementById("leads7").innerText = values[1][1]; // Leads_7_Day
    document.getElementById("cpl7").innerText = `$${values[1][2]}`; // CPL_7_Day
    document.getElementById("prepays7").innerText = values[1][3]; // Prepays_7_Day
    document.getElementById("cash7").innerText = `$${values[1][4]}`; // Cash_7_Day
    document.getElementById("cpp7").innerText = `$${values[1][5]}`; // CPP_7_Day
    document.getElementById("conv7").innerText = `${values[1][6]}%`; // Conversion_Rate_7_Day

    document.getElementById("spend30").innerText = `$${values[2][0]}`; // Spend_30_Day
    document.getElementById("leads30").innerText = values[2][1]; // Leads_30_Day
    document.getElementById("cpl30").innerText = `$${values[2][2]}`; // CPL_30_Day
    document.getElementById("prepays30").innerText = values[2][3]; // Prepays_30_Day
    document.getElementById("cash30").innerText = `$${values[2][4]}`; // Cash_30_Day
    document.getElementById("cpp30").innerText = `$${values[2][5]}`; // CPP_30_Day
    document.getElementById("conv30").innerText = `${values[2][6]}%`; // Conversion_Rate_30_Day
}

// Subscribe to Looker Studio data updates
dscc.subscribeToData(processData, { transform: dscc.objectTransform });
