const canvasSelector = document.querySelector('#canvas');

function createGrid() {

    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement('div');
        divRow.className = "divRow";
        canvasSelector.appendChild(divRow);
        function createRow() {
            for (let i = 0; i < 16; i++) {
                const divItem = document.createElement('div');
                const btn = document.createElement('button');
                divItem.className = "divItem";
                divRow.appendChild(divItem);
            }
        }
        createRow()
    }

}

createGrid()


let divItem = document.querySelectorAll('.divItem');

divItem.forEach(function(i) {
    i.addEventListener('mouseover', function(e) {
        console.log('Button Clicked or Mouseover');
        e.stopPropagation()
        i.style.backgroundColor = 'blue';
    });
});

function changeGridSize() {
    console.log("Hello, you clicked change gride size wahoo!")
}

changeGridSize()




