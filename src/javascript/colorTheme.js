const colorTheme = () => {
  const root = document.querySelector(':root')
  const moonIcon = document.querySelector('.moon-icon')
  const sunIcon = document.querySelector('.sun-icon')
  const logoImg = document.querySelector('.logo-img')
  const moon = document.querySelector('.moon')
  const moonHoles = document.querySelectorAll('.moon-hole')
  const stars = document.querySelectorAll('.star')

  if (moonIcon && sunIcon) {
    const setThemeToLocalStorage = (color) => {
      localStorage.setItem('theme', color)
    }

    const logoAndIcons = () => {
      moonIcon.classList.toggle('active')
      sunIcon.classList.toggle('active')
      logoImg.classList.toggle('logo-img-light')
    }

    const toggleMoonSun = () => {
      moon.classList.toggle('sun')
      moonHoles.forEach((hole) => hole.classList.toggle('hide'))

      if (localStorage.getItem('theme') === 'dark') {
        moon.style.setProperty(
          '-webkit-box-shadow',
          '10px 17px 70px 37px $accent;'
        )
        moon.style.setProperty('-moz-box-shadow', '10px 17px 70px 37px $accent')
        moon.style.setProperty('box-shadow', '-5px -3px 50px 1px white')
      } else {
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
    }

    const starsToRain = () => {
      stars.forEach((star) => {
        star.classList.toggle('rain')
      })
    }

    const setDarkTheme = () => {
      root.style.setProperty('--primary', '#211337')
      root.style.setProperty('--secondary', '#ffd698')
      root.style.setProperty('--accent', '#44cead')
      root.style.setProperty('--white', '#fff')
      root.style.setProperty('--black', '#000000')
      root.style.setProperty('--gray', '#c5c5c5')
      root.style.setProperty('--accent-transparent', '#44ceae9f')
      root.style.setProperty('--primary-transparent', 'rgba(34, 20, 57, 0.849)')

      setThemeToLocalStorage('dark')
      logoAndIcons()
      toggleMoonSun()
      starsToRain()
    }

    const setLightTheme = () => {
      root.style.setProperty('--primary', '#fff')
      root.style.setProperty('--secondary', '#44cead')
      root.style.setProperty('--accent', '#ffcc59')
      root.style.setProperty('--white', '#211337')
      root.style.setProperty('--black', '#211337')
      root.style.setProperty('--gray', '#3f3f3f')
      root.style.setProperty('--accent-transparent', '#ffcc59')
      root.style.setProperty(
        '--primary-transparent',
        'rgba(255, 255, 255, 0.849)'
      )

      setThemeToLocalStorage('light')
      logoAndIcons()
      toggleMoonSun()
      starsToRain()
    }

    if (localStorage.getItem('theme') === 'light') {
      setLightTheme()
    }

    moonIcon.addEventListener('click', setDarkTheme)
    sunIcon.addEventListener('click', setLightTheme)
  }
}

export default colorTheme
