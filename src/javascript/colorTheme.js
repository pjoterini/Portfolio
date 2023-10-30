const colorTheme = () => {
  const root = document.querySelector(':root')
  const moonIcon = document.querySelector('.moon-icon')
  const sunIcon = document.querySelector('.sun-icon')
  const logoImg = document.querySelector('.logo-img')
  const moon = document.querySelector('.moon')
  const moonHoles = document.querySelectorAll('.moon-hole')
  const stars = document.querySelectorAll('.star')

  if (moonIcon && sunIcon) {
    moonIcon.addEventListener('click', () => {
      // CHANGE ROOT COLORS
      root.style.setProperty('--primary-color', '#211337')
      root.style.setProperty('--secondary-color', '#ffd698')
      root.style.setProperty('--accent-color', '#44cead')
      root.style.setProperty('--accent-color-transparent', '#44ceae9f')
      root.style.setProperty('--white', '#fff')
      root.style.setProperty('--black', 'rgb(0, 0, 0)')

      // COLOR MODE BUTTONS
      moonIcon.classList.add('active')
      sunIcon.classList.remove('active')
      logoImg.classList.remove('logo-img-light')

      // MOON / SUN
      if (moon) {
        moon.classList.remove('sun')
        moonHoles.forEach((hole) => hole.classList.remove('hide'))
        moon.style.setProperty(
          '-webkit-box-shadow',
          '10px 17px 70px 37px $accent-color;'
        )
        moon.style.setProperty(
          '-moz-box-shadow',
          '10px 17px 70px 37px $accent-color'
        )
        moon.style.setProperty('box-shadow', '-5px -3px 50px 1px white')
      }

      // STARS
      stars.forEach((star) => {
        star.classList.remove('rain')
      })
    })

    sunIcon.addEventListener('click', () => {
      // CHANGE ROOT COLORS
      root.style.setProperty('--primary-color', '#fff')
      root.style.setProperty('--secondary-color', '#44cead')
      root.style.setProperty('--accent-color', '#ffd698')
      root.style.setProperty('--accent-color-transparent', '#ffd698')
      root.style.setProperty('--white', '#211337')
      root.style.setProperty('--black', '#211337')

      // COLOR MODE BUTTONS
      moonIcon.classList.remove('active')
      sunIcon.classList.add('active')
      logoImg.classList.add('logo-img-light')

      // MOON / SUN
      if (moon) {
        moon.classList.add('sun')
        moonHoles.forEach((hole) => hole.classList.add('hide'))
        moon.style.setProperty(
          '-webkit-box-shadow',
          '10px 17px 70px 37px rgb(254, 171, 88);'
        )
        moon.style.setProperty(
          '-moz-box-shadow',
          '10px 17px 70px 37px rgb(254, 171, 88)'
        )
        moon.style.setProperty(
          'box-shadow',
          '-5px -3px 500px 100px rgb(254, 171, 88)'
        )
      }

      // STARS
      stars.forEach((star) => {
        star.classList.add('rain')
      })
    })
  }
}

export default colorTheme
