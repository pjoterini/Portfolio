const archImages = () => {
  const archImages = document.querySelector('.arch-images')
  const archImagesBtn = document.querySelector('.arch-images-btn')

  if (archImages) {
    const screenWidth = window.screen.width
    const archImagesWidth = 4500
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

    const showButton = () => archImagesBtn.classList.remove('hide')
    const hideButton = () => archImagesBtn.classList.add('hide')

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
