const gridSize = document.getElementById("grid-size");
const gridContainer = document.getElementById("grid-container")
const cells = document.getElementsByClassName("cell")
const clear = document.getElementById("clear")
const colorChange = document.getElementById("change-color")
const randomButton = document.getElementById("random")
let colorActive;

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

const addChangeColorInHover = (cells, color) => {
    Array.from(cells).forEach(cell => cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = color;
    }))
}

const clearColor = () => {
    Array.from(cells).forEach(cell => cell.style.backgroundColor = "#fff")
}

const generateRandomColor = () => {
    let randCol =  "#" + Math.floor(Math.random() * 16777215).toString(16)
    addChangeColorInHover(cells,randCol)
}

const loopGenerateRandomColor = () => {
    Array.from(cells).forEach(cell=> cell.addEventListener("mouseenter", generateRandomColor))
}


window.addEventListener("load", () => {
    changeGridSize(gridSize.value, gridSize)
    addChangeColorInHover(cells, colorChange.value)
})



gridSize.addEventListener("input", (e)=>{
    removeGrid()
    changeGridSize(e.target.value, gridSize)
    if(colorActive == "random color"){
        loopGenerateRandomColor()
    }else{
        addChangeColorInHover(cells, colorChange.value)
    }
})

colorChange.addEventListener("input", (e) => {
    colorActive = "pick color"
    Array.from(cells).forEach(cell=> cell.removeEventListener("mouseenter", generateRandomColor))
    addChangeColorInHover(cells, e.target.value)
})

clear.addEventListener("click", clearColor)

randomButton.addEventListener("click", () => {
    colorActive = "random color"
    loopGenerateRandomColor()
})


