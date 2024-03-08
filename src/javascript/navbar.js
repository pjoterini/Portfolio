const navbar = () => {
  const burgerBtnOpen = document.querySelector('.burger-btn-open')
  const burgerBtnClose = document.querySelector('.burger-btn-close')
  const navLinksBurger = document.querySelector('.nav-links-burger')

  if (burgerBtnOpen) {
    burgerBtnOpen.addEventListener('click', () => {
      burgerBtnOpen.classList.add('hide')
      burgerBtnClose.classList.remove('hide')
      navLinksBurger.classList.remove('hide')
    })

    burgerBtnClose.addEventListener('click', () => {
      burgerBtnClose.classList.add('hide')
      burgerBtnOpen.classList.remove('hide')
      navLinksBurger.classList.add('hide')
    })
  }
}

export default navbar
