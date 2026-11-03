// Funktion hamburgemenyn

const toggle = document.querySelector('#menu-toggle')
const menu = document.querySelector('#menu')

toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden')
  toggle.setAttribute('aria-expanded', String(!open))
})