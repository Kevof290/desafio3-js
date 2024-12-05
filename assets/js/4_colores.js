//Divs a negro
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');

a.addEventListener('click', () => {
    a.style.backgroundColor = '#000'
})
b.addEventListener('click', () => {
    b.style.backgroundColor = '#000'
})
c.addEventListener('click', () => {
    c.style.backgroundColor = '#000'
})
d.addEventListener('click', () => {
    d.style.backgroundColor = '#000'
})

//Ejercicio con eventos de teclado
const key = document.querySelector('#key');

document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        key.style.backgroundColor = 'pink'
    }else if (e.key === 's' || e.key === 'S') {
        key.style.backgroundColor = 'orange'
    }else if (e.key === 'd' || e.key === 'D') {
        key.style.backgroundColor = 'aqua'
    }
})

//Ejercicio de crear Div en el DOM
const createNewDiv = (backgroundColor) => {
    const newDiv = document.createElement("div");
    newDiv.style.height = '200px';
    newDiv.style.width = '200px';
    newDiv.style.margin = '1rem';
    newDiv.style.backgroundColor = backgroundColor
    document.body.appendChild(newDiv)
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'q' || e.key === 'Q') {
        createNewDiv('rebeccapurple')
    } else if (e.key === 'w' || e.key === 'W'){
        createNewDiv('gray')
    }else if (e.key === 'e' || e.key === 'E'){
        createNewDiv('brown')
    }
})

