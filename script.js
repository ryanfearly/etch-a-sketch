const container = document.querySelector('#gridContainer');

let numCells = (16)

//Function to clear any existing divs and set up grid
function populateGrid(numCells) {  
    container.innerHTML = "";
    container.style.cssText = `grid-template-columns: repeat(${numCells}, auto)`; //fix hard code
    for (let i = 0; i < numCells**(2); i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('gridCell');
        container.appendChild(newDiv);
    }
}

//Add event listeners to cells
function addHover () {
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            div.style.cssText = 'background-color: black';
        });
    });
}

//Initial setup
populateGrid(numCells);
addHover();

//Button functionality for reset
button = document.querySelector('#resetButton');
button.addEventListener('click', () => {
    do {
        numCells = prompt('How many squares per side in the grid?', 'No more than 150!')
    } while ((numCells % 1 !== 0) || numCells > 150);
    populateGrid(numCells);
    addHover();
})