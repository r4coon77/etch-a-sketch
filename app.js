let canvasSelector = document.querySelector('#canvas');


function createGrid () {
    for(let i = 0; i <= 16; i++) {
    const divItem = document.createElement('div');
    canvasSelector.appendChild(divItem);
    }
}

createGrid ()