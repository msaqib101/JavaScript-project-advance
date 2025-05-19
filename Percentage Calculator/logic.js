
function PerCal() {
    const userName = document.getElementById("user_name1").value;
    const totalMarks = parseFloat(document.getElementById("total_marks").value);
    const obtained = parseFloat(document.getElementById("obt_marks").value);
    
    if (obtained > totalMarks) {
        alert("Obtained marks cannot be greater than total marks!");
        return;
    }

    const finalRes = (obtained / totalMarks) * 100;
    const resultDiv = document.getElementById("final_result");

    let message = "";
    let emoji = "";
    
    if (finalRes >= 80) {
        emoji = "🎉🌟";
        message = `Hurray ${userName}! You've scored ${finalRes.toFixed(1)}%`;
        resultDiv.style.backgroundColor = "#e6fffa";
        resultDiv.style.color = "#065f46";
    } else if (finalRes >= 50) {
        emoji = "👍😊";
        message = `Good job ${userName}! You've got ${finalRes.toFixed(1)}%`;
        resultDiv.style.backgroundColor = "#ebf8ff";
        resultDiv.style.color = "#1a365d";
    } else if (finalRes >= 33) {
        emoji = "🙂📚";
        message = `${userName}, you scored ${finalRes.toFixed(1)}%. Keep improving!`;
        resultDiv.style.backgroundColor = "#fff5eb";
        resultDiv.style.color = "#7b341e";
    } else {
        emoji = "😟📖";
        message = `${userName}, you need to work harder (${finalRes.toFixed(1)}%)`;
        resultDiv.style.backgroundColor = "#fff5f5";
        resultDiv.style.color = "#c53030";
    }

    resultDiv.innerHTML = `
        <h2>${emoji}</h2>
        <p>${message}</p>
        <small>Total Marks: ${totalMarks} | Obtained: ${obtained}</small>
    `;
}
