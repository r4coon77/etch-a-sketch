let canvasSelector = document.querySelector('#canvas');

function createGrid() {

    for (let i = 0; i < 16; i++) {
        let divRow = document.createElement('div');
        divRow.className = "divRow";
        canvasSelector.appendChild(divRow);
        function createRow() {
            for (let i = 0; i < 16; i++) {
                const divItem = document.createElement('div');
                divRow.appendChild(divItem);
            }
        }
        createRow()
    }

}

createGrid()