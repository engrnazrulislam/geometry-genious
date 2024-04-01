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
    const result = 0.5 * base * height;
    const area = result.toFixed(2);

    if (base && height) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Triangle Area is: ${area}`;
        outputArea.appendChild(h2);
    }

})
// Rectangle Calculation:
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const width = getInputFieldValue('rectangleWidth');
    const length = getInputFieldValue('rectangleLength');
    const result = width * length;
    const area = result.toFixed(2);

    if (width && length) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Rectangle Area is: ${area}`;
        outputArea.appendChild(h2);
    }
})

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const base = getInputFieldValue('parallelogramBase');
    const height = getInputFieldValue('parallelogramHeight');
    const result = base * height;
    const area = result.toFixed(2);

    if (base && height) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Parallelogram Area is: ${area}`;
        outputArea.appendChild(h2);
    }
})
//Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function () {
    const base = getInputFieldValue('rhombusBase');
    const height = getInputFieldValue('rhombusHeight');
    const result = 0.5 * base * height;
    const area = result.toFixed(2);

    if (base && height) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Rhombus Area is: ${area}`;
        outputArea.appendChild(h2);
    }
})
//Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const base = getInputFieldValue('pentagonBase');
    const height = getInputFieldValue('pentagoneHeight');
    const result = 0.5 * base * height;
    const area = result.toFixed(2);

    if (base && height) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Rhombus Area is: ${area}`;
        outputArea.appendChild(h2);
    }
})
// Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const base = getInputFieldValue('ellipseBase');
    const height = getInputFieldValue('ellipseHeight');
    const result = Math.PI * base * height;
    const area = result.toFixed(2);

    if (base && height) {
        const outputArea = document.getElementById('result-container');
        const h2 = document.createElement('h2');
        h2.innerText = `Ellipse Area is: ${area}`;
        outputArea.appendChild(h2);
    }
})
// Clear Result for Calculation Area:
function removeAllElement(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('btn-clear').addEventListener('click', function () {
    const container = document.querySelector('#result-container');
    console.log(container);
    removeAllElement(container);
})

