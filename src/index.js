import './index.html'
import './scss/main.scss'

const oSearch = document.querySelector('.search')
const oSearchInput = document.querySelector('.search__input')

oSearchInput.addEventListener('focus', ()=>{
  oSearch.classList.add('search--focus')
})
oSearchInput.addEventListener('blur', ()=>{
  oSearch.classList.remove('search--focus')
})

const oMenuList = document.querySelector('.menu-list')
const oMenuBtn = document.querySelector('.menu__btn')

oMenuBtn.addEventListener('click', ()=>{
  oMenuList.classList.toggle('menu-list--show')
})
