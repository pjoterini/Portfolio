const archImages = () => {
  let archImages = document.querySelector(".arch-images");
  if (archImages) {
    let maxRight = -415;
    let speedX = 0.4;
    let positionX = -415;

    if (window.screen.width < 1024) {
      let pdfBtn = document.querySelector(".check-pdf");
      pdfBtn.classList.add("check-pdf-hover");

      const myInterval = setInterval(() => {
        positionX = positionX + speedX;
        if (positionX > maxRight || positionX < -2480) {
          speedX = speedX * -1;
        }
        archImages.style.left = positionX + "px";

        archImages.addEventListener("mouseleave", (e) => {
          clearInterval(myInterval);
          pdfBtn.classList.remove("check-pdf-hover");
        });
      }, 1000 / 250);
    }
    if (window.screen.width >= 1024) {
      archImages.addEventListener("mouseenter", (e) => {
        let pdfBtn = document.querySelector(".check-pdf");
        pdfBtn.classList.add("check-pdf-hover");

        const myInterval = setInterval(() => {
          positionX = positionX + speedX;
          if (positionX > maxRight || positionX < -2480) {
            speedX = speedX * -1;
          }
          archImages.style.left = positionX + "px";

          archImages.addEventListener("mouseleave", (e) => {
            clearInterval(myInterval);
            pdfBtn.classList.remove("check-pdf-hover");
          });
        }, 1000 / 250);
      });
    }
  }
};

export default archImages;
