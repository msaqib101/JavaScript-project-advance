
function tableLoop() {
    const tableNumber = document.getElementById("table_number").value;
    const tableCount = document.getElementById("table_count");
    const fullTable = document.getElementById("full_table");
    
    // Clear previous results
    fullTable.innerHTML = "";
    
    // Input validation
    if (!tableNumber || tableNumber < 1 || tableNumber > 100) {
        fullTable.innerHTML = `<div class="table-row" style="color:#ef4444">Please enter a valid number between 1-100</div>`;
        tableCount.textContent = "?";
        return;
    }

    tableCount.textContent = tableNumber;

    // Generate table using while loop
    let i = 0;
    while (i <= 10) {
        const tableItem = document.createElement("div");
        tableItem.className = "table-row";
        tableItem.innerHTML = `
            <div>${tableNumber} × ${i}</div>
            <div><strong>${tableNumber * i}</strong></div>
        `;
        fullTable.appendChild(tableItem);
        i++;
    }
}
