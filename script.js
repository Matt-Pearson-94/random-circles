// User will input the number of circles.
// Afterwhich, the a circle will be generated with the following properties
// Random position on the webpage
// Random size - max: 250px, min: 25px
// Random colour
// Random opacity (of up to 50%)
// Random Background colour 

const numOfCircles = prompt('Enter the number of circles...')
const area = document.querySelector('body')
const colours = ['red', 'yellow', 'pink', 'green', 'orange', 'purple', 'blue']

function drawCircle() {
    for (let i = 0; i < numOfCircles; i++) {
        let size = `${Math.floor((Math.random() * 225) + 25)}px`
        let circle = document.createElement('div')
        circle.classList.add('circle')
        area.appendChild(circle)
        area.style.backgroundColor = 'rgb(0, 100, 255, 0.2)'    // `${randomRGB()}`       // `${randomColour()}`
        circle.style.backgroundColor = `${randomTrans()}`    // `${randomRGB()}`      // `${randomColour()}`
        circle.style.width = size
        circle.style.height = size
        circle.style.top = `${randomPosition()}`
        circle.style.left = `${randomPosition()}`
    }
}

function randomColour() {
    let colour = `${colours[(Math.floor(Math.random() * colours.length))]}`
    return colour
    }

function randomPosition() {
    let position = `${Math.random() * 1500}px`
    return position
}

function randomRGB() {
    let randTrs = (Math.random() * .75)
    let rgb = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${randTrs})`
    return rgb
}

function randomTrans() {
    let randTrs = (Math.random() * .5)
    let rgb = `rgb(0, 100, 255, ${randTrs})`
    return rgb
}

drawCircle(numOfCircles)
