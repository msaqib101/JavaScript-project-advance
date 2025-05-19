
function grade_cal(){
    let sub1 = document.getElementById("sub1").valueAsNumber;
    let sub2 = document.getElementById("sub2").valueAsNumber;
    let sub3 = document.getElementById("sub3").valueAsNumber;
    let sub4 = document.getElementById("sub4").valueAsNumber;

    if([sub1, sub2, sub3, sub4].some(mark => mark > 100 || mark < 0)){
        alert("Please enter valid marks between 0 and 100");
        return;
    }

    let obtained = sub1 + sub2 + sub3 + sub4;
    let total = 400; // Corrected total from 500 to 400 (4 subjects)
    let percentage = (obtained/total)*100;
    let grade = "";

    if(percentage >= 80){
        grade = "A+ 🎉";
    } else if(percentage >= 70){
        grade = "A 👍";
    } else if(percentage >= 60){
        grade = "B 😊";
    } else if(percentage >= 50){
        grade = "C ✏️";
    } else if(percentage >= 40){
        grade = "D 📚";
    } else {
        grade = "E ❗";
    }

    document.getElementById("result").innerHTML= `
        <h2>📊 Results Summary</h2>
        <ul>
            <li>Math: ${sub1}</li>
            <li>Islamiyat: ${sub2}</li>
            <li>Urdu: ${sub3}</li>
            <li>English: ${sub4}</li>
        </ul>
        <h3>Total Marks: ${obtained}/${total}</h3>
        <h3>Percentage: ${percentage.toFixed(2)}%</h3>
        <div class="grade">Grade: ${grade}</div>
    `;
}
