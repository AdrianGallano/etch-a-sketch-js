const gridSize = document.getElementById("grid-size");
const gridContainer = document.getElementById("grid-container")


const changeGridSize = (size) => {

    for(let col = 0; col < size; col++){
        let column = document.createElement("div")
        column.setAttribute("data-col-num", `col${col}`)
        column.style.cssText = "display:flex;"
        gridContainer.appendChild(column)

        for(let row = 0; row < size; row++){
            column.appendChild(document.createElement('div'))
        }
    }
}

const removeGrid = () => {
    let grids = document.querySelectorAll("#grid-container div")
    for(let grid of grids){
        grid.remove()
    }
}

window.addEventListener("load", changeGridSize(gridSize.value))

gridSize.addEventListener("change", (e)=>{
    removeGrid()
    changeGridSize(e.target.value)
})