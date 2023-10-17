const spaceBackground = () => {
  const stars = document.querySelectorAll('.star')
  let moon = document.querySelector('.moon')

  // STARS

  stars.forEach((star) => {
    const spark = (star) => {
      star.classList.toggle('spark')
    }

    let delay = Math.random().toFixed(1).slice(2) * 1000
    if (delay > 5000) {
      delay = delay / 2
    } else if (delay < 2000) {
      delay = 2500
    }

    setInterval(spark, delay, star)
  })

  //  MOON

  if (moon) {
    function sparkMoon() {
      moon.classList.toggle('spark-moon')
    }
    setInterval(sparkMoon, 4000)
  }
}

export default spaceBackground
