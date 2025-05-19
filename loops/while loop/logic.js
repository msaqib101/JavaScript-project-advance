
function tableLoop() {
    const tableNumber = parseInt(document.getElementById("table_number").value);
    const tableCount = document.getElementById("table_count");
    const fullTable = document.getElementById("full_table");

    fullTable.innerHTML = "";

    if (!tableNumber || tableNumber < 1 || tableNumber > 100) {
        fullTable.innerHTML = `<div class="table-item" style="color:#dc2626; background:#fee2e2">Please enter a valid number between 1-100</div>`;
        tableCount.textContent = "?";
        return;
    }

    tableCount.textContent = tableNumber;

    let i = 0;
    while (i <= 10) {
        const tableItem = document.createElement("div");
        tableItem.className = "table-item";
        tableItem.innerHTML = `
            <div style="font-size: 0.95rem; color: #6b7280; margin-bottom: 6px">${tableNumber} × ${i}</div>
            <div style="font-size: 1.3rem; font-weight:700; color:#059669">${tableNumber * i}</div>
        `;
        fullTable.appendChild(tableItem);
        i++;
    }
}
