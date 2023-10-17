const archImages = () => {
  let archImages = document.querySelector('.arch-images')
  if (archImages) {
    const archImagesBtn = document.querySelector('.arch-images-btn')
    const screenWidth = window.screen.width
    const archImagesWidth = 4076.75
    const endPosition = archImagesWidth - screenWidth
    const frequency = 20 // Higher number means less fluid animation
    let maxRight = 5
    let positionX = 1
    let appendedPixels = 2

    const startCarousel = () => {
      positionX = positionX + appendedPixels

      if (positionX > maxRight || positionX < -endPosition) {
        appendedPixels = appendedPixels * -1
      }
      archImages.style.left = positionX + 'px'
    }

    const showButton = () => archImagesBtn.classList.add('arch-images-btn-show')
    const hideButton = () =>
      archImagesBtn.classList.remove('arch-images-btn-show')

    // MOBILE
    if (screenWidth < 1024) {
      showButton()

      const archImagesCarouselMobile = setInterval(() => {
        startCarousel()
      }, frequency)

      archImages.addEventListener('click', () => {
        clearInterval(archImagesCarouselMobile)
      })
    }

    // DESKTOP
    if (screenWidth >= 1024) {
      archImages.addEventListener('mouseenter', (e) => {
        showButton()

        const archImagesCarouselDesktop = setInterval(() => {
          startCarousel()
        }, frequency)

        archImages.addEventListener('mouseleave', () => {
          clearInterval(archImagesCarouselDesktop)
          hideButton()
        })
      })
    }
  }
}

export default archImages
