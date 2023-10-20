const home = document.querySelector('.home')
const portfolio = document.querySelector('.portfolio')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const nav = document.querySelector('.nav')

nav.addEventListener('click',(e)=>{
  e.preventDefault()
  if(e.target.id){
    const section = document.querySelector(`.${e.target.id}`)
    section.scrollIntoView({behavior: 'smooth'})
  }
})