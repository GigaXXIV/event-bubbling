const body = document.body
const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const button = document.querySelector('button')

let pinkNum = 0
const addPinkBox = () => {
  const newBox = document.createElement('div')
  newBox.classList.add('pink')
  pinkNum++
  newBox.textContent = pinkNum
  green.appendChild(newBox)
}
