const gridSize = document.getElementById("grid-size");
const gridContainer = document.getElementById("grid-container")
const cells = document.getElementsByClassName("cell")
const clear = document.getElementById("clear")

const changeGridSize = (size, ref) => {
    ref.nextElementSibling.textContent = `${size}x${size}`
    for(let row = 0; row < size; row++){
        const rows = document.createElement("div")
        gridContainer.appendChild(rows)
        for(let col = 0; col < size; col++){
            const column = document.createElement("div")
            column.setAttribute("class", "cell")
            rows.appendChild(column)
        }
    }
}

const removeGrid = () => {
    const grids = document.querySelectorAll("#grid-container div")
    for(let grid of grids){
        grid.remove()
    }   
}

const addChangeColorInHover = (cells, color="#262626") => {
    Array.from(cells).forEach(cell => cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = color;
    }))
}

const pickColor = () => {
    return false
}

const clearColor = () => {
    Array.from(cells).forEach(cell => cell.style.backgroundColor = "#fff")
}

//on window load
const start = () => {

    window.addEventListener("load", () => {
        changeGridSize(gridSize.value, gridSize)
    })
    
    
    window.addEventListener("load", () => {
        addChangeColorInHover(cells)
    })
}
start()


gridSize.addEventListener("input", (e)=>{
    removeGrid()
    changeGridSize(e.target.value, gridSize)
    addChangeColorInHover(cells)
})


clear.addEventListener("click", clearColor)