var student = {
    name: "",
    type: "student"
};

document.addEventListener ('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').value;

    var totalNameValue = 0;
    for (let i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
        
    }

    // Insert result into page
    var output = "Total Numeric Valur Of Person's Name Is " + totalNameValue;
    document.getElementById('output').innerText = output;
}