const canvasSelector = document.querySelector('#canvas');
let gridSize = 16;
let = isDrawing = false;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const divRow = document.createElement('div');
        divRow.className = "divRow";
        canvasSelector.appendChild(divRow);
        function createRow() {
            for (let i = 0; i < gridSize; i++) {
                const divItem = document.createElement('div');
                const btn = document.createElement('button');
                divItem.className = "divItem";
                divRow.appendChild(divItem);
            }
        }
        createRow()
    }
    let divItem = document.querySelectorAll('.divItem');
    divItem.forEach(function(i) {
        i.addEventListener('mousedown', () => {
            isDrawing = true;
            if(isDrawing === true){
            console.log('Mousedown');
            i.style.backgroundColor = 'blue';
            } else console.log("Mouse not down")
        }, false);
        i.addEventListener('mouseover', () => {
            if(isDrawing === true){
            console.log('Mousedown');
            i.style.backgroundColor = 'blue';
            } else console.log("Mouse not down")
        }, false);
        i.addEventListener('mouseup', () =>{
            isDrawing = false;
        }, false);
    });
    canvasSelector.addEventListener('mouseleave', ()=>{
        isDrawing = false;
    })
}

createGrid(gridSize)


function resetGrid() {
    document.querySelectorAll('.divItem').forEach(e => e.remove());
    document.querySelectorAll('.divRow').forEach(e => e.remove());
}

function changeGridSize() {
   gridSize = prompt("Please Enter Gride A Size Between 4 By 24", "16");
   if(gridSize >= 4 && gridSize <= 24) {
    resetGrid();
   createGrid(gridSize);
   console.log(gridSize)
   } else if (gridSize < 4 || gridSize > 24){
    gridSize = alert("Wrong Size: Please Enter A Grid Size Between 4 By 24");
    changeGridSize()
   } else if (isNaN(gridSize) === true) {
    gridSize = alert("Wrong Input: Please Enter A Number");
    changeGridSize()
   }
}







