// Get Input Field Data
function getInputFieldValue(inputFieldData) {
    const inputField = document.getElementById(inputFieldData);
    const inputFieldValue = inputField.value;
    const inputData = parseFloat(inputFieldValue);
    inputField.value = "";
    return inputData;
}

// Triangle Calculation
document.getElementById('btn-triangle').addEventListener('click', function () {
    const base = getInputFieldValue('triangleBase');
    const height = getInputFieldValue('triangleHeight');
    const area = 0.5 * base * height;

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Triangle Area is: ${area}`;
    outputArea.appendChild(h2);
})
// Rectangle Calculation:
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const width = getInputFieldValue('rectangleWidth');
    const length = getInputFieldValue('rectangleLength');
    const area = width * length;

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Rectangle Area is: ${area}`;
    outputArea.appendChild(h2);
})

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const base = getInputFieldValue('parallelogramBase');
    const height = getInputFieldValue('parallelogramHeight');
    const area = base * height;

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Parallelogram Area is: ${area}`;
    outputArea.appendChild(h2);
})
//Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function () {
    const base = getInputFieldValue('rhombusBase');
    const height = getInputFieldValue('rhombusHeight');
    const area = 0.5 * base * height;

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Rhombus Area is: ${area}`;
    outputArea.appendChild(h2);
})
//Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const base = getInputFieldValue('pentagonBase');
    const height = getInputFieldValue('pentagoneHeight');
    const area = 0.5 * base * height;

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Rhombus Area is: ${area}`;
    outputArea.appendChild(h2);
})
// Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const base = getInputFieldValue('ellipseBase');
    const height = getInputFieldValue('ellipseHeight');
    const result = Math.PI * base * height;
    const area=result.toFixed(2);

    const outputArea = document.getElementById('calcArea');
    const h2 = document.createElement('h2');
    h2.innerText = `Ellipse Area is: ${area}`;
    outputArea.appendChild(h2);
})

