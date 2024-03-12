const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger-btn')
  const burgerIcon = document.querySelector('.burger-icon')
  const navLinksBurger = document.querySelector('.nav-links-burger')

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      burgerIcon.classList.toggle('fa-x')
      burgerIcon.classList.toggle('fa-bars')
      navLinksBurger.classList.toggle('hide')
    })
  }
}

export default burgerMenu
