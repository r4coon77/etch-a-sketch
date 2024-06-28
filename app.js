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
let = isDrawing = false;



canvasSelector.addEventListener('mouseleave', ()=>{
    isDrawing = false;
})


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


function changeGridSize() {
    console.log("Hello, you clicked change gride size wahoo!")
}



changeGridSize()




