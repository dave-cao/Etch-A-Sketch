//Making grid 16x16

const gridContainer = document.querySelector(".container");
const changeGrid = document.querySelector("#changeGrid");

//This only influences the number, not the row or columns, that happens in the css
let gridSize = 16;
//call createGrid
createGrid();

//change grid option
changeGrid.addEventListener("click", function () {
  gridSize = prompt("choose");
  gridContainer.setAttribute(
    `style`,
    `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`
  );
  createGrid();
});

//function that creates grid
function createGrid() {
  for (i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    //hover effect
    grid.addEventListener("mouseover", function () {
      grid.setAttribute("style", "background: blue");
    });
    gridContainer.appendChild(grid);

    //change grid Size
    changeGrid.addEventListener("click", function () {
      gridContainer.removeChild(grid);
    });

    //grid reset
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", function () {
      grid.removeAttribute("style", "background: blue");
    });
    gridContainer.appendChild(grid);
  }
}

//link gridSize to css to change the fr parameters
