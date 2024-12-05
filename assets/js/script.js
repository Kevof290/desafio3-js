const ele = document.getElementById("ele1")

const pintar = (color = 'green') => {
    ele.style.backgroundColor = color
    }
    pintar ()

ele.addEventListener("click", () => {
        ele.style.backgroundColor = 'yellow'
    })