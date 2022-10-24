import x from './x.js'
import gif from './images/1.gif'
console.log(gif)
const div = document.getElementById('app')
div.innerHTML = `
 <img src=${gif}/> 
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module)=>{
    const fn = module.default
    fn()
  },()=>{})
}
div.appendChild(button)
console.log(x)