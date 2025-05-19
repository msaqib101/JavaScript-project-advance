
function tableLoop() {
    const tableNumber = document.getElementById("table_number").value;
    const tableCount = document.getElementById("table_count");
    const fullTable = document.getElementById("full_table");
    
    // Clear previous results
    fullTable.innerHTML = "";
    
    // Input validation
    if (!tableNumber || tableNumber < 1 || tableNumber > 100) {
        fullTable.innerHTML = `<div class="table-item" style="color:#ef4444">Please enter a valid number between 1-100</div>`;
        tableCount.textContent = "?";
        return;
    }

    tableCount.textContent = tableNumber;
    
    // Generate table
    for (let i = 0; i <= 10; i++) {
        const tableItem = document.createElement("div");
        tableItem.className = "table-item";
        tableItem.innerHTML = `
            <div style="font-size: 0.9rem; color: #64748b">${tableNumber} × ${i}</div>
            <div style="font-size: 1.2rem; font-weight:600; color:#6366f1">${tableNumber * i}</div>
        `;
        fullTable.appendChild(tableItem);
    }
}
