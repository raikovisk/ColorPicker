let rangeRed = null, rangeGreen = null, rangeBlue = null;
let textRed = 0, textGreen = 0, textBlue = 0;
let divSquare = null;
let rbgValue = document.getElementById('rgbValue');
let r = 0, g = 0, b = 0;

window.addEventListener('load', () => {
    mapElements();
})

function mapElements(){
    rangeRed= document.querySelector('#rangeRed');
    rangeGreen= document.querySelector('#rangeGreen');
    rangeBlue= document.querySelector('#rangeBlue');

    textRed= document.querySelector('#textRed');
    textGreen= document.querySelector('#textGreen');
    textBlue= document.querySelector('#textBlue');

    divSquare = document.querySelector('#divSquare');
    body = document.querySelector('body');

    rangeRed.addEventListener('change', handleRangeChange);
    rangeGreen.addEventListener('change', handleRangeChange);
    rangeBlue.addEventListener('change', handleRangeChange);
}

function handleRangeChange(event) {
    let value = event.target.value;
    let id = event.target.id;

    switch (id) {
        case 'rangeRed': r = value;
        break;

        case 'rangeGreen': g = value;
        break;

        case 'rangeBlue': b = value;
        break;
    }
    syncDiv();
}

function syncDiv(){
    let bkgdClr = `rgb(${r},${g},${b})`
    body.style.backgroundColor = bkgdClr;
    textRed.value = `${r}`;
    textGreen.value = `${g}`;
    textBlue.value = `${b}`;

    rbgValue.innerHTML = bkgdClr;
}