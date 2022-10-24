import x from './x.js'
import gif from './images/1.gif'
console.log(gif)
const div = document.getElementById('app')
div.innerHTML = `
 <img src=${gif}/> 
`
console.log(x)