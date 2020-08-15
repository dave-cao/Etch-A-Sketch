//Making grid 16x16

const gridContainer = document.querySelector(".container");
const changeGrid = document.querySelector("#changeGrid");

//This only influences the number, not the row or columns, that happens in the css
let gridSize = 16;
//call createGrid
createGrid();

//change grid button
changeGrid.addEventListener("click", function () {
  gridSize = prompt(
    "Choose grid size from 0-100. It will generate a grid that is yourNumber x yourNumber!"
  );
  gridContainer.setAttribute(
    `style`,
    `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`
  );
  createGrid();
});

//function that creates grid

function createGrid() {
  for (i = 0; i < gridSize * gridSize; i++) {
    //random colour number generator
    const randomColourGenerator1 = Math.floor(Math.random() * 256);
    const randomColourGenerator2 = Math.floor(Math.random() * 256);
    const randomColourGenerator3 = Math.floor(Math.random() * 256);

    const grid = document.createElement("div");
    grid.classList.add("grid");
    //hover effect default
    grid.addEventListener("mouseover", function () {
      grid.setAttribute(`style`, `background: #3E7CB1`);
    });
    gridContainer.appendChild(grid);

    //single colour button
    const singleColor = document.querySelector("#singleColor");
    singleColor.addEventListener("click", function () {
      grid.addEventListener("mouseover", function () {
        grid.setAttribute("style", "background: #3E7CB1");
      });
    });

    //many color button
    const manyColor = document.querySelector("#manyColor");
    manyColor.addEventListener("click", function () {
      grid.addEventListener("mouseover", function () {
        grid.setAttribute(
          "style",
          `background: rgb(${randomColourGenerator1}, ${randomColourGenerator2}, ${randomColourGenerator3})`
        );
      });
    });

    //erase button
    const erase = document.querySelector("#erase");
    erase.addEventListener("click", function () {
      grid.addEventListener("mouseover", function () {
        grid.removeAttribute("style");
      });
    });

    //change grid Size (get rid of divs first)
    changeGrid.addEventListener("click", function () {
      gridContainer.removeChild(grid);
    });

    //grid reset
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", function () {
      grid.removeAttribute(`style`);
    });
    gridContainer.appendChild(grid);
  }
}
